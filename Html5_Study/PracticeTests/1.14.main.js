var array = new Array('A','B','C','D','E');

var i = 0;
do {
    i++;
    if( array[i] == 'B') {
        continue;
    }
    if( array[i] == 'D') {
        break;
    }
    document.write(array[i]);
    
}while( array[i] != 'E');