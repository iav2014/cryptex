/**
 * normal nodejs code,,,
 */
const utils = require('./your_code/example.js');
utils.print("hello Nacho");
utils.print("Hello Nacho with callback",(err)=>{
	if(!err) console.log('no error!');
});