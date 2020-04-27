CRYPTEX
crypt your nodejs code and use it with "require" sentence, in realtime


This code can be used to not reveal the content of your code made in nodejs,
protecting it against unauthorized modifications, 
allowing the distribution of the code to third companies

examples,

this is your "normal" code, not encrypted:

/**
 * normal nodejs code,,,
 */
 
const utils = require('./your_code/example.js');

utils.print("hello Nacho");

utils.print("Hello Nacho with callback",(err)=>{

if(!err) console.log('no error!');
	
});
	
This is the same code protected and how execute it,
/**
 * test your crypted nodejs module,
 * remember to pass CRYPTEXKEY environment variable
 * and add require('./cryptex'); at the begining of the code
 */
require('./cryptex');
const utils = require('./your_code/example.js.crypt'); // load your code crypted

utils.print("hello Nacho"); // use normally
utils.print("Hello Nacho with callback",(err)=>{
	if(!err) console.log('no error!');
});

How to crypt: - Steps (1,2,3):
1) crypt the hex.js file function. This hex file, is used to decrypt and execute node_modules.
node crypt_hex_file.js

RUN: node crypt_hex_file.js

this example using 2 keys, 
general password (must be put at env) and private code password:

'cryptex_password_key', 'your_code_password_key'
once you have encrypted the hex.js file.

you can delete the original (hex.js) so you don't reveal the decryption program


2) crypt your code

node crypt_your_code.js

This module generate ".js.crypt" file (your code encripted) using 'your_code_password_key' using in Step 1
(Modify this code to read multiple ".js" file in three directories, using recursion)

3) test your encrypted code

example:

/**
 * test your crypted nodejs module,
 * remember to pass CRYPTEXKEY environment variable
 * and add require('./cryptex'); at the begining of the code
 */
 
require('./cryptex'); // important !

const utils = require('./your_code/example.js.crypt'); // your module crypted !

utils.print("hello Nacho");

utils.print("Hello Nacho with callback",(err)=>{

if(!err) console.log('no error!');
	
});

sh execution format: 

CRYPTEXKEY=cryptex_password_key node this_is_your_nodejs_program_protected.js

4) delete de hex.js file in production environment.
 
 Only use the hex.js.crypt version of hex.js.crypt (hex.js.cryptex)


enjoy !

Nacho Ariza, oct 2019
MIT License







