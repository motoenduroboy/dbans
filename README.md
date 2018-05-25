# DBans [![Build Status](https://travis-ci.org/motoenduroboy/dbans.svg?branch=master)](https://travis-ci.org/motoenduroboy/dbans)
An API to communicate with bans.discordlist.net (Unoffical)

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
```js
{
  "banID": "5403",
  "username": "Warfare#2239",
  "userID": "270572289035206657",
  "reason": "Mention Raid",
  "proof": "http://tinyurl.com/ybyzsy53"
}
```
