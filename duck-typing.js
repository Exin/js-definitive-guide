/**
 * Created by wangxin on 16/8/3.
 */
    //对象的js
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
//继续上面多态的例子,修改,把不变的部分(动物都会叫)和变的部分(不同的动物叫法不同)分离开,
//把可变的部分封装起来,把不变的部分隔离出来,程序是可扩展的,符合开放封闭原则
var makeSound = function(animal){
    animal.sound();
}
var Duck = function(){};
Duck.prototype.sound = function(){
    console.log("gagagaga");
}
makeSound(new Duck());

//----------------------
// renderMap的例子
var googleMap = {
    show:function(){
        console.log("渲染google地图");
    }
}
var baiduMap = {
    show:function(){
        console.log("渲染baidu地图");
    }
}
var sosoMap = {
    show:function(){
        console.log("渲染soso地图");
    }
}
function renderMap(map){
    //instanceof 返回boolean值
    if(map.show instanceof Function)
        map.show();
}
renderMap(sosoMap);
renderMap(baiduMap);
renderMap(googleMap);

//--------------------
//使用克隆的原型模式,飞机大战分身的例子
var Plane = function(){
    this.blood = 100;
    this.attacklevel = 1;
    this.defenselevel = 1;
}
Object.create = Object.create || function(obj){
        var F = function(){};
        F.prototype = obj;
        return new F();
    }
//使用构造函数
var plane = new Plane();
plane.blood = 70;
plane.attacklevel = 10;
plane.defenselevel = 9;
var clonePlane = Object.create(plane);
console.log(clonePlane);