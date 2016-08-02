//var calculator = {
//    operator1:1,
//    operator2:3,
//    add:function(){
//        this.result = this.operator1+this.operator2;
//    }
//}
//calculator.add();
//calculator.result;
//
//var ob = [
//    function(n){return 10*n},
//    12
//];
//ob[0](99);
//

//var a = {};
//a.func = f(8);
//var f = function factorial(n){
//    if(n <= 1) return 1;
//    return n*factorial(n-1);
//}
//a.func;
//var b = a.func;
//console.log(b);

//
//var o = {
//    m: function(){
//        var self = this;
//        console.log(this===o);
//        f();
//
//        function f(){
//            console.log(this===o);
//            console.log(self===o);
//        }
//    }
//}
//o.m();

//function animal () {
//    this.name = "an animal";
//    this.showname = function(){
//        //alert(this.name);
//        console.log(this.name);
//    }
//}
//function cat () {
//    this.name = "a cat";
//}
//var animal = new animal();
//var cat = new cat();
//animal.showname.call(cat);

//function Animal(name){
//    this.name = name;
//    this.showname = function(){
//        console.log(this.name);
//    }
//}
//function Cat(name){
//    //this.name = " a cat";
//    Animal.call(this,name);
//}
//
//var cat = new Cat("blackie");
//cat.showname();


//function trace(o,m){
//    var original = o[m];
//    o[m] = function(){
//        console.log(new Date(),"Entering:",m);
//        var result = original.apply(this,arguments);
//        console.log(new Date(),"Exiting:",m);
//        return result;
//    }
//}
//
//var obj = {
//    f:function (a,b){
//        return a-b;
//    }
//};
//
//trace(obj,f);

var a = [],
    result = [];
for(var i = 0; i < 10; i++)
{
    a[i] = Math.floor(Math.random()*10);
}
result = a.sort();
console.log(result);

function fast_sort(a[]){

}
