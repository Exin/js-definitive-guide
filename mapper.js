/**
 * Created by wangxin on 16/7/25.
 */
//mapper函数,接受[x,y...]和f,返回[f(x),f(y)...]

//function mapper(a,f){
//    return function(a){
//        return a.map(function(x){return f(x);});
//    }
//}
//
//function f(x){return x*x;}
//var data  =[1,2,4,6];
//var result = data.map(function(x){return f(x)});
//
////var result = mapper(data,f);
//console.log(result);


//-----------------------------
    //返回一个新的可以计算f(g(x))的函数,
//返回的函数h()将他自己的实参传入g(),然后将g()的结果传入f()
    //
var mapper = function(f){
    return function(a){
        return a.map(f);
    }
}
var square = function(x){return x*x;};
var sum = function(x,y){return x+y;};
var summer = mapper(sum);

function compose(f,g){
    return function(x){
        return f.call(this, g.apply(this,arguments));
    }
}
var squareOfSum = compose(square,sum);
console.log(squareOfSum);
var result = squareOfSum(1,2,3,4);
console.log(result);

<input type = "input" value="请点击" onclick = "a()" ondblclick="b()">
var isdb = false;
function a(){
    window.setTimeout(function(){
        if(isdb) return;
        else alert("click");
    },300);

}
function b(){
    isdb = true;
    alert("dblclick");
}


<input type="button" onclick="aa()" ondblclick="bb()" value="点我">
    <script language="javascript">
var isdb;
function aa(){
    isdb=false;
    window.setTimeout(cc, 500)
    function cc(){
        if(isdb)return;
        alert("单击")
    }
}
function bb(){
    isdb=true;
    alert("双击")
}
</script>
