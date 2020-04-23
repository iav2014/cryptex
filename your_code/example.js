let print = (message) => {
	console.log('print:'+message);
};
let print2 = (message,callback) => {
	console.log('print_with_callback:'+message);
	callback(null);
};
let square=(a)=>{
	return a*a;
}
module.exports.print = print;
module.exports.print_with_callback = print2;
module.exports.square = square;