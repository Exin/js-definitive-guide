/**
 * Created by wangxin on 16/7/20.
 */
//function bind(f,o){
//    if(f.bind) return f.bind(o);
//    else return function(){
//        return f.apply(o,arguments);
//    }
//
//}
//var o = {
//    x:2
//}
//function f(y){
//    return this.x+y;
//}
//var g = f.bind(o);
//console.log(g(3));
//定义一个加函数
//function sum (a,b){
//    return a+b;
//}
////定义一个类似的函数,this 的值
//var succ = sum.bind(null,1);
//console.log(succ(3));
//
//function f(y,z){
//    return this.x+y+z;
//}
////把f绑定到{x:1}上,并且传入第二个参数y=2
//var g = f.bind({x:1},2);
////传入第三个参数z=100
//console.log(g(100));

//function leapYear(year){
//    if (year%100==0)
//    {
//        if(year%400==0) return true;
//        else return false;
//    }
//    else if (year%4==0) return true;
//    else return false;
//}
//console.log(leapYear(2005));
//
//function leapYear(year){
//    return year%100==0 ? (year%400==0 ? 1 : 0) : (year%4==0 ? 1 : 0);
//}
//
//function getDaysInMonth(year){
//    var isLeap = leapYear(year);
//    var arrayMonth = [];
//    arrayMonth = [31,28+isLeap,31,30,31,30,31,31,30,31,30,31];
//    return arrayMonth;
//}
//console.log(getDaysInMonth(2008));

//判断是否闰年不是目的,目的是获得每月的天数,所以合并以上两个函数得到以下函数
function leapYear(year){
    var isLeap = year%100==0 ? (year%400==0 ? 1 : 0) : year%4==0 ? 1 :0;
    var arrayMonth = [31,28+isLeap,31,30,31,30,31,31,30,31,30,31];
    return arrayMonth;
    console.log(arrayMonth);
}
console.log(leapYear(2016));