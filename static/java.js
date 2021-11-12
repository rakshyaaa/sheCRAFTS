// let c=1;
// function f(){
//     if(c==1){
//     document.getElementById("myphoto").src="photos/school.jpg";
//     }
//     if(c==2){
//         document.getElementById("myphoto").src="photos/logo.jpg";
//     }
//     if(c==3){
//     document.getElementById("myphoto").src="photos/background.jpg";
//     }
//     if(c==4){
//     document.getElementById("myphoto").src="photos/logo.jpg";
//     }
//     if(c==5){
//     document.getElementById("myphoto").src="photos/school.jpg";
    
//     }
//     if(c==6){
//     document.getElementById("myphoto").src="photos/background.jpg";
//     c=0;
//     }
//     c++;
// }
// setInterval("f()",2000);

// function toggle_burger()
// {
//     let my_ul=document.getElementById("my-ul");
    // let maximum_width=document.getElementById("navbar").style.maxWidth;
    // I remove this because screen do not need to resize on specific device
//     if(my_ul.style.display!='block')
//     {
//         my_ul.style.display='block';
//     }
//     else
//     {
//         my_ul.style.display='none'; 
//     }
// }

// function show_contact()
// {
//     let contact=document.getElementById("contact-div");
//     contact.style.display='block';
//     // if(contact.style.display!='block')
//     // {
//     //     contact.style.display='block';
//     // }
//     // else{
//     //     contact.style.display='none';
//     // }
// }



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (moreText.style.display!="block") {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "block";
    } else {
      dots.style.display = "block";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
} 

function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  };
// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });