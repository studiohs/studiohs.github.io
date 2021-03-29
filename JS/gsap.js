gsap.to("#preLoader",{
    y:"-110%",
    delay:4.5,
    duration:1,
    ease:"power4.out"
})

gsap.fromTo(".loaderText",{
    opacity:0,
    // scale:0.9,
},{
    delay:1,
    // scale:1,
    opacity:1,
    duration:1,
    repeat:-1,
    yoyo:true,
    stagger:0.1
})


gsap.fromTo("#leadHeading",{
    opacity:0,
    skewY:5,
    skewX:5,
    y:80
},{
    skewY:0,
    skewX:0,
    opacity:1,
    delay:6,
    duration:2,
    y:0,
    ease:"power4"
})


gsap.fromTo("#subLeadHeading",{
    opacity:0,
    y:"-50%",
},{
    opacity:1,
    delay:4,
    y:"90%",
    duration:2,
    ease:"power4",
    stagger:{
        amount:40
    }
})


gsap.fromTo(".leftMenuItem",{
    opacity:0,
    x:-100
},{
    opacity:1,
    delay:5,
    duration:1,
    x:0,
    ease:"power4",
    stagger:0.1
})

// gsap.fromTo(".rightMenuBtn",{
//     opacity:0,
// },{
//     opacity:1,
//     delay:6.5,
//     duration:1,
//     ease:"elastic",
//     stagger:0.1
// })


gsap.fromTo(".landing-page-cta",{
    opacity:0,
},{
    opacity:1,
    delay:5.3,
    duration:2,
    ease:"elastic",
    stagger:0.3
})

gsap.fromTo(".socialIcons",{
    opacity:0,
    scale:0.8,
},{
    scale:1,
    opacity:1,
    delay:5.3,
    duration:1,
    ease:"elastic",
})




// Scroll Trigger

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#section-2',
        start : "top center",
        end:'+=200',
    }
})

tl.from('.pageHeading',{
    x:-100,
    opacity:0,
})
.fromTo('#section-2-img',{
    x:"-90%",
    y:"-70%",
    scale:0.5,
    opacity:0
},{
    x:"-90%",
    y:"-70%",
    scale:1,
    opacity:1,
    ease:"power4"
})
.fromTo(".gsapLineAnim",{
    y:20,
    skewY:5,
    opacity:0
},{
    y:0,
    skewY:0,
    opacity:1,
    ease:"power4",
    duration:2,
    stagger:0.3
},"-=0.5")

.from(".service-card",{
    opacity:0,
    stagger:0.2
},"-=1");


let tlsec3 = gsap.timeline({
    scrollTrigger:{
        trigger:'#section-3',
        start : "top center",
        end:'+=200',
    }
})

tlsec3.fromTo(".section3gsapLineAnim",{
    y:20,
    skewY:5,
    opacity:0
},{
    y:0,
    skewY:0,
    opacity:1,
    ease:"power4",
    duration:2,
    stagger:0.3
},"-=0.5")



// sideMenu
document.getElementById("fixedMenuBtn").addEventListener("click",()=>{

    if(document.getElementById("fixedSideMenu").classList.contains('open')){ 
        gsap.fromTo('#fixedSideMenu li a',{
            y:0,
            skewX:0,
            skewY:0,
            opacity:1
        },{
            opacity:0,
            y:100,
            skewX:20,
            skewY:10,
            duration:1,
            ease:"expo.inOut",
            stagger:0.5
        });
        gsap.to('#fixedSideMenu li',{
            x:'-100%',
            visibility:'hidden',
            delay:1.2,
            duration:2,
            ease: "expo.inOut",
            stagger:0.1
        });
        gsap.to('#fixedSideMenu',{
            x:'-100%',
            delay:3.5,
            duration:1,
            ease: "power4"
        });
    }else{
        gsap.to('#fixedSideMenu',{
            x:0,
            duration:1,
            ease: "power4"
        });
        gsap.to('#fixedSideMenu li',{
            visibility:'visible',
            x:0,
            duration:2.5,
            ease: "expo.inOut",
            stagger:0.1
        });
        gsap.fromTo('#fixedSideMenu li a',{
            opacity:0,
            y:100,
            skewX:20,
            skewY:10,
        },{
            y:0,
            skewX:0,
            skewY:0,
            opacity:1,
            delay:1,
            duration:1.5,
            ease:"expo.inOut",
            stagger:0.5
        });
    }

})


// Work Section

let workBtn = document.getElementById("workSectionBtn");
let closeWorkSectionBtn = document.getElementById("closeWorkSectionBtn");

workBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    gsap.to('#workSection',{
        x:0,
        duration:2,
        ease:"expo.inOut"
    })

    gsap.fromTo('.audioWrapper',{
        opacity:0,
    },{
        opacity:1,
        delay:2,
        duration:1,
        stagger:0.1
    })

    gsap.fromTo('iframe',{
        opacity:0
    },{
        opacity:1,
        delay:2.2,
        duration:1,
        stagger:0.1
    })

    gsap.fromTo('.videoBtns',{
        opacity:0,
        scale:0.8
    },{
        opacity:1,
        scale:1,
        delay:3.2,
        duration:0.5,
        stagger:0.5,
        ease:"expo.inOut"
    })
})

closeWorkSectionBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    gsap.to('#workSection',{
        x:'100%',
        duration:2,
        ease:"expo.inOut"
    })
})

