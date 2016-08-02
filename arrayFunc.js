/**
 * Created by wangxin on 16/7/21.
 */
//forEach()

//var data = new Array(5);


//var data = Array.apply(null,Array(10));
//data.forEach(function( v, i, a){ a[i] =  Math.floor(Math.random()*10);});
//console.log(data.sort());


//for(i in ["a",,"c"]) console.log(typeof(i));
//console.log("\n");
//["a",,"c"].forEach(function(e,i,a){console.log(typeof(i))})


//var data = ["a",undefined,"c"];
//data.forEach(function(e){console.log(e)})

//apply配合Array使用,可以将数组缝隙填补为 undefined 元素
//var a = new Array(6);
//Array.apply(null,Array(6));
//console.log(a);


//在数组a中查找所有出现的x, 返回包含所有匹配索引的数组result
function findall(a,x){
    var p = 0,
        result=[],
        len= a.length;
    while(p<len){
        if(a[p] == x)
            result.push(p);
        p++;
    }
    console.log(result);
    return result;
}

findall([1,2,1,0,0,3,1],1);

function findall2(a,x){
    var p = 0;
    var result = [];
    var len = a.length;
    while(p<len){
        p = a.indexOf(x,p);
        if(p == -1) break;
        else {
            result.push(p);
            p++;
        }
    }
    console.log(result);
    return result;
}
findall2([1,2,1,0,0,3,1],0);

//数组扁平化
var matrix = [
    [1,2],
    [3,4,5],
    [6,7,8,9]
];
var result = matrix.reduce(function(pre,cur){return pre.concat(cur)});
console.log(result);