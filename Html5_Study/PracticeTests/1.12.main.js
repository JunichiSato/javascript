if('123' === String('123')) {
	console.log('A');
}
if(new String('123') === String('123')) {
	console.log('B');
}
if(new String('123') === '123') {
	console.log('C');
}
if(123 === new Number(123)) {
	console.log('D');
}
if(123 === Number(123)) {
	console.log('E');
}
