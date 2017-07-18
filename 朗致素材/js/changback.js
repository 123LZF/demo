/**
 * Created by Administrator on 2017/6/9.
 */
/*
$(".ul1 li").hover(function(){
   var index= $(this).index();
    console.log(index);
    var background1=["url(images/bg-img-1_02.png)","url(images/bg-img-2_02.png)","url(images/bg-img-3_02.png)"];
    $(".s2").css("background",background1[index]);
},function(){})*/

$(".ul1 li").hover(function(){
    var i= $(this).index();
    $(".banner div").eq(i).stop().animate({"opacity":"1"}).siblings().stop().animate({"opacity":"0"});
   /* $(".img1").eq(i).css("opacity","0.3").siblings().css("opacity","1")*/
},function(){})