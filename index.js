const https = require('https');
const request = require('request');

/**
* The main DBans class
* @prop {String} token DBans token
* @prop {Object} options Options for the API
* @prop {Object} cache The cache of the API
*/
class DBans {

  /**
  * The main DBans class
  * @constructor
  * @prop {String} token Your DBans token (Not your bot token)
  * @prop {Object} [options] The options for the API (all are optional)
  * @prop {Boolean} [options.cache=true] Should bans be cached
  * @prop {Number} [options.cacheTimeout=600000] The amount of time the ban should be cached
  */
  constructor(token, options) {
    options = options ? options : {};
    if (token) {
      this.token = token;
      this.options = {};

      if (typeof options.cache !== "undefined") {
        if (typeof options.cache === "boolean") {
          this.options.cache = options.cache;
        } else {
          throw new TypeError("options.cache must be typeof Boolean!");
        }
      } else {
        this.options.cache = true;
      }

      if (typeof options.cache !== "undefined") {
        if (typeof options.cacheTimeout === "number") {
          this.options.cacheTimeout = options.cacheTimeout;
        } else {
          throw new TypeError("options.cacheTimeout must be typeof Number!");
        }
      } else {
        this.options.cacheTimeout = 600000;
      }

      if (this.options.cache === true) {
        this.cache = require('js-cache');
      }
    } else {
      throw new Error("No Token Provided!");
    }
  }

  /**
  * Checks if a User is on Dbans
  * @arg {string} userID The ID of the user you want to check
  * @returns {Promise} Resolves when a response comes back from https://bans.discordlist.net/api
  */
  check (userID) {
    return new Promise((resolve, reject) => {
      if (!userID) {
        reject(Error("No UserID Provided!"));
      } else {
        if (this.options.cache === false || !(this.cache && this.cache.get(userID))) {
            request.post({
              url: 'https://bans.discordlist.net/api',
              form: {
                'version':  '3',
                'token':    this.token,
                'userid':   userID
              }
            }, (err, res, body) => {
              if (err) {
                reject(err);
              } else {
                try {
                  if (body !== "False") {
                    body = body ? JSON.parse(body) : [];
                    const ban = {
                      banID: body[0],
                      username: body[1],
                      userID: body[2],
                      reason: body[3],
                      proof: body[4].split("\"")[1]
                    }
                    if (this.options.cache) {
                      this.cache.set(userID, ban, this.options.cacheTimeout);
                    }
                    resolve(ban);
                  } else {
                    if (this.options.cache) {
                      this.cache.set(userID, false, this.options.cacheTimeout);
                    }
                    resolve(false);
                  }
                } catch (err) {
                  reject(err);
                }
              }
            });
        } else if (this.options.cache === true && this.cache && this.cache.get(userID)) {
          resolve(this.cache.get(userID));
        }
      }
    });
  }

}

module.exports = DBans
