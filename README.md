# DBans [![Build Status](https://travis-ci.org/motoenduroboy/dbans.svg?branch=master)](https://travis-ci.org/motoenduroboy/dbans)
An API to communicate with bans.discord.id (Unoffical)

## Install
```
npm install dbans
```

## Usage
### Check a user
```javascript
let DBans = require('dbans');
DBans = new DBans('YOUR TOKEN');

DBans.check("USERID").then(ban => {
  //INSERT YOUR CODE HERE
}).catch(err => {
  console.error(err);
});
```

#### Return Object
Example
If banned:
```js
{
    "banned": "1",
    "user_id": "412811483630534657",
    "case_id": "21861",
    "reason": "Dbans Api test account",
    "proof": "https://imgur.com/a/Sw04K"
}
```
If not banned it will return
```js
{
    "user_id": "279866000533618689",
    "banned": "0"
}
```

### Check multiple users
```javascript
let DBans = require('dbans');
DBans = new DBans('YOUR TOKEN');

DBans.checkUsers(["412811483630534657", "279866000533618689"]).then(bans => {
  //INSERT YOUR CODE HERE
}).catch(err => {
  console.error(err);
});
```

#### Return Object
```js
[
    {
        "banned": "1",
        "user_id": "412811483630534657",
        "case_id": "21861",
        "reason": "Dbans Api test account",
        "proof": "https://imgur.com/a/Sw04K"
    },
    {
        "user_id": "279866000533618689",
        "banned": "0"
    }
]
```
