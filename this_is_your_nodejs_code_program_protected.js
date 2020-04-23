/**
 * test your crypted nodejs module,
 * remember to pass CRYPTEXKEY environment variable
 * and add require('./cryptex'); at the begining of the code
 */
require('./cryptex');
const utils = require('./your_code/example.js.crypt');

utils.print("hello Nacho");
utils.print("Hello Nacho with callback",(err)=>{
	if(!err) console.log('no error!');
});
console.log(utils.square(3));