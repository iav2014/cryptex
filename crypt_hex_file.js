const crypto = require('crypto');
const fs = require('fs');
/**
 * used for crypt hex.js file,
 * this file is added to criptex.js like hex.js.crypt before and contains the code and the password used
 * in crypt key parameter used to crypt your code
 * @param p: key
 * @param f: file
 */
let cryptex_hex = (p, p1, f) => {
	let iv = new Buffer.alloc(16); // fill with zeros
	let password_hash = crypto.createHash('md5').update(p, 'utf-8').digest('hex').toUpperCase();
	
	const cipher = crypto.createCipheriv('aes-256-cbc', password_hash, iv);
	let str = fs.readFileSync(f, 'ascii');
	str = str.replace("code_password_key", p1);
	let encrypted = cipher.update(str, 'ascii', 'hex');
	encrypted += cipher.final('hex');
	fs.writeFileSync(f + '.crypt', encrypted, 'ascii');
};
/**
 *
 * used to crypt your source code,
 * the key of this module and the key using for hex.js must be different,
 * @type {string}
 * cryptex_password_key: your password to crypt crytex function module
 * your_code_password_key: key used to protect your node modules.
 */
let file = __dirname + '/cryptex/hex.js';
cryptex_hex('cryptex_password_key', 'your_code_password_key', file);
console.log('your hex.js module function was crypted!');