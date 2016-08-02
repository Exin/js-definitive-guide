function classof(o){
    if(o===null) return "NUll";
    if(o===undefined) return "Undefined"
    return Object.prototype.toString.call(o).slice(8,-1);
}
var s = classof(classof());
console.log(s);