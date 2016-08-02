/**
 * Created by wangxin on 16/8/1.
 */

var smallKenan = function(action){
    var bigKenan = function(doing){
        var result = "";
        if(action === "take drugs"){
            if(doing === "bathWithGirlFriend"){
                result = "新一,你这个色狼,然后一巴掌...";
            }
            else if(doing ==="pointOutKiller"){
                result = "新一,这个案子就交给你了,尽快找出凶手吧";
            }
        }
        else{
            if(doing === "bathWithGirlFriend"){
                result = "来吧,柯南,一起洗澡吧~";
            }
            else if(doing === 'pointOutKiller'){
                result = "小孩子滚一边去,别在这儿碍事!";
            }
        }
        console.log(result);
        return bigKenan;//或者用return arguments.callee;
        //The 5th edition of ECMAScript (ES5) forbids use of arguments.callee() in strict mode.
        // Avoid using arguments.callee() by
        // either giving function expressions a name or
        // use a function declaration where a function must call itself.
    }
    return bigKenan;
}
//小柯南吃药了,然后和小兰一起bath
smallKenan("take drugs")("bathWithGirlFriend")("pointOutKiller");

function creatPerson(sIdentity){
    var oPerson = new Function("alert(arguments.callee.identity);");
    oPerson.identity = sIdentity;
    return oPerson;
}
var john = creatPerson("J Smith");
john();

//
var currying = function(fn){
    var args = [].slice.call(arguments,1);
    return function(){
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(null,newArgs);
    }
}
var getWife = currying(function(){
    var allwife = [].slice.call(arguments);
    console.log(allwife.join(";"));
},"合法老婆");

getWife("大老婆","小老婆","各种老婆");

getWife("超越韦小宝的老婆");