let DBans = require('../index.js');
DBans = new DBans('HEHEHE');

DBans.check('412811483630534657').then(ban => {
	console.log(ban);
}).catch(err => {
  console.error(err);
});