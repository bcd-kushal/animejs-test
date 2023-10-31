var gridStrips          =   document.querySelectorAll(  ".gridStrip"    );
var fadeToLeft          =   document.querySelectorAll(  ".ftl"  );
var fadeToRight         =   document.querySelectorAll(  ".ftr"  );
var translateToTop      =   document.querySelectorAll(  ".ttt"  );
var translateToBottom   =   document.querySelectorAll(  ".ttb"  );

var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 700
});

var tl2 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 2100
});

var tl3 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500
});

setTimeout(() => {

    tl 
    .add({
            targets: gridStrips,
            background: "rgb(197,197,255)",
            delay: anime.stagger(50),
            margin: "0 0.5px 0 0.5px",
            transition: "1.5s"
        })
    .add({
            targets: gridStrips,
            background: "rgba(197,197,255,0.25)",
            delay: anime.stagger(200, { start: 500 } ),
            translateY: "-100vh",
            translateX: "0vw",
            transition: "0s",
            duration: 800
        })
    .add({
            targets: gridStrips,
            background: "rgba(197,197,255,0)",
            //delay: anime.stagger(80, { start: 1000 } ),
            translateY: "-100vh",
            translateX: "20vw",
            transition: "0s",
            duration: 250
        })
    .add({
            targets: gridStrips,
            background: "rgba(197,197,255,0.25)",
            //delay: anime.stagger(80, { start: 1000 } ),
            translateY: "0vh",
            transition: "0s",
            duration: 250
        })
    .add({
            targets: gridStrips,
            background: "rgb(197,197,255)",
            //delay: anime.stagger(80, { start: 1000 } ),
            translateX: "0vw",
            transition: "0s",
            margin: "0 0 0 0",
            delay: anime.stagger(50, { start: 50 })
        })
    .add({
            targets: gridStrips,
            background: "rgb(223,223,255)",
            delay: anime.stagger(60),
            translateX: "0vw",
            margin: "0 0 0 0",
            transition: "1s"
        })
    .add({
            targets: document.querySelector(".essentialGridParent"),
            scale: 2,
            rotate: 45,
            translateY: "-70vh",
            translateX: "50vw",
    })
 

    tl2.add({
        targets: document.querySelector(".borderCreator"),
        translateY: "-100vh",
        delay: anime.stagger({ start: 350 }),
        transition: ".5s"
    })

}, 1000);



const imgages = document.querySelectorAll(".stripImg");
setTimeout(() => {
    imgages.forEach( (img) => {
        img.animate({
            visibility: "visible"
        }, { duration: 500, fill: "forwards" });
    });
}, 3500 );
setTimeout(() => {
    imgages.forEach( (img) => {
        img.animate({
            visibility: "hidden"
        }, { duration: 500, fill: "forwards" });
    });
}, 5500 );