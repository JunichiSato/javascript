try {
	document.write('A');
	throw 'B';
	document.write('C');
} catch(e) {
	document.write(e);
} finally {
	document.write('D');
}