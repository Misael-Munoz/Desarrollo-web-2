function* infiniteSequence() {   //Function* crea objeto generador
    var i = 0;
    while(true) {
        yield i++;
    }
}
    
var iterator = infiniteSequence();
while (true) {
    console.log(iterator.next()); // { value: xxxx, done: false } para siempre
}
    