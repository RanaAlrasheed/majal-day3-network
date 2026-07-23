Reveal.initialize({

hash:true,
controls:true,
progress:true,

slideNumber:true,

center:false,

transition:'slide',

backgroundTransition:'fade',

autoAnimate:true,

autoAnimateDuration:0.8,

width:1280,

height:720,

margin:.04,

navigationMode:'default',

keyboard:true,

touch:true,

embedded:false,

overview:true,

});


/*-----------------------
PORT ACTIVITY
-----------------------*/


document
.querySelectorAll(".port-grid button")
.forEach((button)=>{


button.addEventListener("click",()=>{


document
.querySelectorAll(".port-grid button")
.forEach((btn)=>{

btn.classList.remove("selected");

});


button.classList.add("selected");


});


});



/*-----------------------
TIMELINE EFFECT
-----------------------*/


document
.querySelectorAll(".timeline-box")
.forEach((card)=>{


card.addEventListener("mouseenter",()=>{

card.style.transform="translateX(8px)";

});


card.addEventListener("mouseleave",()=>{

card.style.transform="translateX(0px)";

});


});



/*-----------------------
CARDS EFFECT
-----------------------*/


document
.querySelectorAll(

".card,.protocol-card,.lab-card,.network-card"

)

.forEach((card)=>{


card.addEventListener("mouseenter",()=>{


card.style.transform="translateY(-5px)";


});


card.addEventListener("mouseleave",()=>{


card.style.transform="translateY(0px)";


});


});



/*-----------------------
PACKET BOX EFFECT
-----------------------*/


document
.querySelectorAll(".packet-box span")
.forEach((packet)=>{


packet.addEventListener("mouseenter",()=>{


packet.style.transform="scale(1.08)";


});


packet.addEventListener("mouseleave",()=>{


packet.style.transform="scale(1)";


});


});



/*-----------------------
SCROLL ANIMATION
-----------------------*/


Reveal.on("slidechanged",()=>{


const fragments =

document.querySelectorAll(

".fragment.visible"

);


fragments.forEach((element)=>{


element.style.animation=

"fadeUp .6s ease";


});


});



/*-----------------------
KEYBOARD SHORTCUTS
-----------------------*/


document.addEventListener(

"keydown",

(event)=>{


if(event.key==="h"){


Reveal.toggleHelp();


}


}


);
