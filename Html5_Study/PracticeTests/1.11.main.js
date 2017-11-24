function f(val){
    document.write(val);
    document.write(this);
}

f.call('A','B');