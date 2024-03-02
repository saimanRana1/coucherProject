var tl=gsap.timeline()
tl.from("#nav h1,#nav h3,#nav h4",{
    y:-80,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.3,
})
tl.from("#left h1",{
    x:-80,
    opacity:0,
    duration:0.8,
    delay:1,
    stagger:0.3,
})
tl.from("#right img",{
    opacity:0,
    scale:-2,
    duration:0.8,
})
gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        start:"top 60%",
    }
})