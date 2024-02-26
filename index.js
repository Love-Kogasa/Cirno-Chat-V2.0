alert("该版本为CirnoChat2.0测试版\n正式版还请多待");
document.write("<center><h1>Cirno - Chat</h1>");
document.write("\
    <input type='text' value='Info?' id='input'><br>\
    <button id='output'>Think Now</button><br>\
    <br><user>Text please</user>\
    <br><bot>...</bot><br><br>\
</center>");

//mumlong = mum.length

var zero = 0;
//这里声明一个0 下面有些旧代码懒得删，别喷
$(document).ready( function(){
//jQuery准备
    /*$("json").load("head/info.json");*/
    $("#output").click( function(){
    //onclick event DOM事件 当id为output的Element被点击时
        var user = $("#input").val();
        //返回框的val输入框的属性值 默认为inputElement的value属性
        //var bot = $("#input").val();
        //旧代码没删掉，也没用
        var nml = mum.length - 2;
        //声明nml变量为mum长度-2 mum见think.js
        var num = mum.length;
        function contrast(){
        //函数
            if(typeof user !== "undefined"){
            zero = 0;
            //当user存在
                while(similar(user,mum[zero]) < Math.floor(Math.random()*40)/100+0.1 && zero < mum.length - 1){
                    zero++;
                    //引用similar支持 比对两字符的精准度是否小于随机数0-1同时zero小于mum长度-1
                }
                if(zero >= mum.length){
                    zero = Math.floor(Math.random()*nml);
                }
                //不了解的字符为随机位置
                return mum[zero];
                //返回值
            } else {
                return 0;
                //返回0
            }
        }
        $("user").html("You: " + user);
        //显示玩家输入值 相当于原生js的document.innerHTML
        mum[num] = user;
        $("bot").html("baka: " + contrast());
        //baka说: 
        num++;
    });
});