var obj = {
	f: function(){
		document.write('A');
	}
}
function f(){
	document.write('B');
}

with(obj) {
	function f(){
		document.write('C');
	}
	f();
}