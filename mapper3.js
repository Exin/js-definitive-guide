/**
 * Created by wangxin on 16/7/25.
 */
var mapper = function(f){
    return function(a){
        return map(a,f);
    }
}

var increment = function(x){return x+1;};
var incrementer = mapper(increment);
var data = [1,3,4,5,6];
var result = incrementer(data);
console.log(result);
