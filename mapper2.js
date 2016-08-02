/**
 * Created by wangxin on 16/7/25.
 */
//var mapper = function(f){
//    return function(a){
//        return a.map(f);
//    }
//}
var square = function(x){return x*x;};
var sum = function(x,y){return x+y;};
//var summer = mapper(sum);
var summer = function(a){
    //return function() {
        var b = a.reduce(function (pre, cur, i, a) {
            return pre + cur;
        }, 0);
        return b;
    //}
}

function compose(f,g){
    return function(x){
        return f.call(this, g.apply(this,arguments));
    }
}
var squareOfSum = compose(square,summer);
//console.log(squareOfSum);
var result = squareOfSum([1,2,3,4]);
console.log(result);

