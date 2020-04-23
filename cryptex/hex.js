let register = (e) => {
	function t(t, i) {
		return t._compile(function (e, t) {
			let i = e.algorithm || "aes-256-cbc";
			let iv = new Buffer.alloc(16); // fill with zeros
			let password_hash = crypto.createHash('md5').update("code_password_key", 'utf-8').digest('hex').toUpperCase();
			let o = crypto.createDecipheriv(i, password_hash, iv);
			return Buffer.concat([o.update(fs.readFileSync(t)), o.final()])
		}(e, i).toString(), i)
	}
	let i = (e) => {
		let r = path.basename(e).split(".");
		for ("" === r[0] && r.shift(); r.shift();) {
			let t = "." + r.join(".");
			if (Module._extensions[t]) return t
		}
		return ".js"
	};
	e || (e = {}), require.extensions && (e.ref || (e.ref = [".crypt"]), e.ref.forEach((e) => {
		require.extensions[e] = t
	}), Module = require("module"), Module.prototype.load = function (e) {
		this.filename = e, this.paths = Module._nodeModulePaths(path.dirname(e));
		let r = i(e);
		return Module._extensions[r](this, e), this.loaded = !0, this.loaded
	})
};
const fs = require("fs"), path = require("path"), crypto = require("crypto");
module.exports = register;