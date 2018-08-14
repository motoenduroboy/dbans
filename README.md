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
  "case_id": "5403",
  "reason": "Mention Raid",
  "proof": "http://tinyurl.com/ybyzsy53"
}
```
If not banned it will return false!
