const fs = require('fs');
const crypto = require('crypto');
/**
 * using for crypt your source code
 * @param p : key
 * @param f: file
 * @param m: mode
 */
let crypt = (p, f, m) => {
	let iv = new Buffer.alloc(16); // fill with zeros
	let password_hash = crypto.createHash('md5').update(p, 'utf-8').digest('hex').toUpperCase();
	const cipher = crypto.createCipheriv('aes-256-cbc', password_hash, iv);
	let str = fs.readFileSync(f, 'utf8');
	let encrypted = cipher.update(str, 'utf8', 'binary');
	encrypted += cipher.final('binary');
	fs.writeFileSync(f + '.crypt', encrypted, 'binary');
};


let file = __dirname + '/your_code/example.js';
crypt('your_code_password_key', file,);
console.log('your code file',file,' was crypted!');



