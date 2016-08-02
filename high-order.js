/**
 * Created by wangxin on 16/7/25.
 */
//高阶函数,接受一个或多个函数作为参数,返回一个函数

//这个高阶函数返回一个新函数,这个新函数将他的实参传入f,并且返回f返回值的取反


function not(f){
    return function(){
        var result = f.apply(this,arguments);
        return !result;
    }
}

function even (x){
    return x%2 == 0;
}
function odd(x){
    return x%2 == 1;
}

data = [1,3,5,7,11,12];
console.log(data.every(not(even)));
console.log(data.some(not(odd)));

