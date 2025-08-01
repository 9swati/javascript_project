var istatus  =  document.querySelector("h5");
var btn = document.querySelector("#add");
// var removeFriend = document.querySelector("#remove")

 var check = 0;
btn.addEventListener("click",function()
{ 
    if(check==0)
    {
    istatus.innerHTML="  friends";
    istatus.style.color ="green";
    btn.innerHTML = "remove friend"
    // console.log("hi");

    check=1;
    }
    else
    {
        istatus.innerHTML="stranger";
         istatus.style.color ="red"; 
         btn.innerHTML = "add friend"
        //  console.log("bye");
         check = 0;
    }

});

// removeFriend.addEventListener("click",function()
// {
//     istatus.innerHTML="stranger";
//     istatus.style.color = "red";

// });


