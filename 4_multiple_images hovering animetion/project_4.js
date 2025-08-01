var elem = document.querySelectorAll(".elem");

// (".elem");
console.log(elem);

elem.forEach(function(val)
{
    // console.log("hello";)
    // console.log(val);
    // console.log((val.childNodes[3]));  //[3] thrid node




    val.addEventListener("mouseenter",function()
    {
        // console.log("Enterd");
       // val.style.backgroundColor = "red";
        val.childNodes[3].style.opacity= 1;
    })

    val.addEventListener("mouseleave",function()
    {
        // console.log("leave");
        // val.style.backgroundColor = "transparent";
        val.childNodes[3].style.opacity= 0;
    })

    val.addEventListener("mousemove",function(dates){
        // console.log("leave");
        // val.style.backgroundColor = "transparent";
        // val.childNodes[3].style.opacity= 0;

         val.childNodes[3].style.left = dates.x+"px";
         val.childNodes[3].style.top= dates.y+"px";




    });



});


    //   or
// var elemImage = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove",function(dets)
// {
//     // console.log("hello");

//     elemImage.style.left = dets.x+"px";
//     elemImage.style.top = dets.y+"px";
// });

// elem1.addEventListener("mouseenter",function(dets)
// {
// elemImage.style.opacity = 1
// });

// elem1.addEventListener("mouseleave",function(dets)
// {
// elemImage.style.opacity = 0
// });

