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
//注意与第二段代码比较
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

//---------------------------
console.log("----------")
//表示值的范围的类的另外一种实现
// 这是一个构造函数,用于初始化新创建的范围对象
//⚠️,这里并没有创建并返回一个对象(那是工厂方法),仅仅是初始化
//从某种意义上讲,定义构造函数就是定义类,类名首字母要大写,普通的函数和方法都是首字母小写
//构造函数是用来"构造新对象"的,必须通过关键字new来调用
function Range(from,to){
    this.from = from;
    this.to = to;
}
//原型是Range.prototype这是个强制的命名,对Range构造函数的调用会自动使用Range.prototype作为新Range对象的原型
//两种范围方法定义和调用方式是一样的
//预定义的Range.prototype对象遭到重写,从而不含constructor属性,需要显式添加,或者扩展预定义的Range.prototype而不重写之
Range.prototype = {
    constructor:Range,//显式设置构造函数的反向引用
    includes:function(x){
        return this.from <= x && x<=this.to;
    },
    foreach:function(f){
        for(var x = Math.ceil(this.from);x<this.to;x++) f(x);
    },
    toString:function(){return "("+this.from+"..."+this.to+")";}
}
var r = new Range(1,3);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r);
console.log(r.toString());
console.log(r.toString);
