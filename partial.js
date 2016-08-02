/**
 * Created by wangxin on 16/7/26.
 */
//将类数组对象转化为真正的对象
function array(a,n){
    return Array.prototype.slice.call(a,n||0);
}
var data = [1,2,34,4];
console.log(array(data,1));

//这个函数的实参传递之左侧
function partialLeft(f /*,...*/){
    var args = arguments;
    return function(){
        var a = array(args,1);
        a = a.concat(array(arguments));
        return f.apply(this,a);
    }
}

//这个函数的实参传递至右侧
function partialRight(f){
    //保存外部实参数组
    var args = arguments;
    return function(){
        //从内部参数开始
        var a = array(arguments);
        //然后添加外部的参数,生成一个实参列表
        a = a.concat(array(args,1));
        //最后基于这个实参表调用f()
        return f.apply(this,a);
    }
}

//实参列表中的undefined被填充
function partial(f){
    var args = arguments;
    return function(){
        var i= 0,j= 0,a=array(args,1);
        for(;i<args.length;i++)
        {
            if(a[i]==undefined){
                a[i]=arguments[j++];
            }
        }
        a = a.concat(array(arguments,j));
        return f.apply(this,a);
    }
}

var f = function(x,y,z){return x*(y-z);};
console.log(partialLeft(f,2)(3,4));
console.log(partialRight(f,2)(3,4));
console.log(partial(f,undefined,2)(3,4));

function sum(a,b){return a+b;}
var increment = partialLeft(sum,1);