const crypto = require('crypto');
const hex=require('fs').readFileSync(__dirname+'/hex.js.crypt','utf8');
exports.unpack = function (p) {
	let iv = new Buffer.alloc(16); // fill with zeros
	let password_hash = crypto.createHash('md5').update(p, 'utf-8').digest('hex').toUpperCase();
	let dec = require("crypto").createDecipheriv("aes256", password_hash,iv);
	return(eval(dec.update(hex, "hex", "utf8") + dec.final("utf8")))
}


