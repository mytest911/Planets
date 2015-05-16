$(document).ready(function(){
  var w = $(".stars").width();
  var h = $(".stars").height();
  for(var i=0;i<=50;i++){
    $(".stars ul").append("<li></li>");
  }
  $(".stars ul li").each(function(){
        $(this).css("top",(Math.random()*h)+"px").css("left",(Math.random()*w)+"px");
    });
});