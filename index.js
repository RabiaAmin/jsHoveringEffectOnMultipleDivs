

var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){

 val.addEventListener("mouseenter",function(){
    val.childNodes[1].style.opacity = 1;
 
 });

 val.addEventListener("mouseleave",function(){
    val.childNodes[1].style.opacity = 0;
 });

 val.addEventListener("mousemove",function(dets){
    val.childNodes[1].style.left = dets.x+"px";
    val.childNodes[1].style.top = dets.y+"px";
 });
})














// var elem1 = document.querySelector("#elem1");
// var elemImg = document.querySelector("#elem1 img");


//  elem1.addEventListener("mousemove",function(dets){
//    elemImg.style.opacity = 1;
//    elemImg.style.left = dets.x+"px";
//    elemImg.style.top = dets.y+"px";
   
//  });

//  elem1.addEventListener("mouseleave",function(){
//     elemImg.style.opacity = 0;
 
    
//   });