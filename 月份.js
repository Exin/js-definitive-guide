/**
 * Created by wangxin on 16/7/22.
 */
function ashow(){
    var month = 7;
    var week = "周"+"日一二三四五六".split("")[new Date(2016,month-1,1).getDay()];
    console.log(month+"月份的第一天是"+week);
}
ashow();
