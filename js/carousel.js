/**
 * Created by jf on 2016/11/11.
 */
window.onload=function(){
    //第一步是让箭头缓慢的出来;
    var wrap=document.getElementById("wrap");
    var slide=document.getElementById("slide");
    var ul=slide.children[0];
    var lis=ul.children;
    var arrow=document.getElementById("arrow");
    var left=document.getElementById("arrLeft");
    var right=document.getElementById("arrRight");
    wrap.onmouseover=function(){
        animate(arrow,{"opacity":1})
    };
    wrap.onmouseout=function(){
        animate(arrow,{"opacity":0})
    };
    //第二步要图像排列好;
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    function assgin(){
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i],config[i],function(){
                flag=true;
            });
        }
    }
    assgin()

    //第三部就是要图片动起来;
    right.onclick=function(){
        if(flag){
            flag=false;
            config.push(config.shift());
            assgin();
        }

    };
    left.onclick=function(){
        if(flag){
            flag=false;
            config.unshift(config.pop());
            assgin();
        }

    }
    //添加节流阀;
    var flag=true;

};