$(function(){
    var index=1;
    $("#right").click(function(){
        var page=2;
        if(index==page){
            $(".slide1").animate({
                marginLeft:"0px",
            });
            index=1
        }else{
            $(".slide1").animate({
                marginLeft:"-900px",
            });
            index++;
        }
        /* $(".slide1").css("margin-left",-index*900);
         console.log(index)*/
    })
    $("#left").click(function(){
        var page=2;
        if(index=1){
            $(".slide1").animate({
                marginLeft:"0px",
            });
           index=page;
        }else{
            $(".slide1").animate({
                marginLeft:"900px",
            });
            index--;
        }
    })
    $("#left").click(function(){
        var page=2;
        if(index==page){
            $(".slide1").animate({
                marginLeft:"0px",
            });
            index=1
        }else{
            $(".slide1").animate({
                marginLeft:"900px",
            });
            index++;
        }
    })

})

/*$("#left").click(function(){
    var index=0;
    if(index<3){
        index++;
    }

    /!* $(".slide1").css("margin-left",-index*900);
     console.log(index)*!/
    $(".slide1").animate({
        marginLeft:"900px",
    })
})*/
