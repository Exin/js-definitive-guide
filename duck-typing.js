/**
 * Created by wangxin on 16/8/3.
 */
var duck = {
    ducksinging:function(){
        console.log("111");
    }
}
var chicken = {
    ducksingsing:function(){
        console.log("111");
    }
}

//合唱团
var choir = [];

var joinChoir = function(animal){
    //typeof 返回的是字符串
    if(animal && typeof animal.ducksingsing == 'function') {
        choir.push(animal);
        console.log("welcome to choir!!!");
        console.log("现有合唱团成员数量:" + choir.length);
    }
};

joinChoir(duck);
joinChoir(chicken);

//---------------------------
//多态的js
var makeSound = function(animal){
    if(animal instanceof Duck)
    console.log("gagaga");
    else if(animal instanceof Chicken)
    console.log("jijiji");
}
// 构造函数
var Duck = function(){};
var Chicken = function(){};

makeSound(new Duck());
makeSound(new Chicken());
