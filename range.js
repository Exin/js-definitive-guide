/**
 * Created by wangxin on 16/8/2.
 */
//range.js 实现一个能表示值的范围的类
//
function inherit(p){
    if(p==null) throw TypeError();
    if(Object.creat) return Object.create(p);
    var t =typeof p;
    if(t!=="object" && t!=="function") throw TypeError();
    function f(){};
    f.prototype = p;
    return new f();
}
//从这个工厂方法返回一个新的范围对象
function range(from,to){
    //范围对象r继承自原型对象range.methods
    var r = inherit(range.methods);
    r.from = from;
    r.to = to;
    return r;
}
//原型对象定义方法,这些方法为所有的范围对象所继承
range.methods = {
    //比较数字 字符串 日期范围
    includes: function(x){
        return this.from<=x && x<=this.to;
    },
    //对于范围内的每个整数都调用一次f
    foreach: function(f){
        for (var x=Math.ceil(this.from);x<=this.to;x++) f(x);
    },
    //返回表示这个范围的字符串
    toString: function(){return "("+this.from+"..."+this.to+")";}
}

var r = range(1,3);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r);
console.log(r.toString());
console.log(r.toString);

