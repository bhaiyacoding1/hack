
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".about",
        start:"0% 50%",
        end:"100% 50%",
        // markers:true,
        scrub:1,
    }
})
tl.to(".text-area-hover h1",{
    width:"100%"
})
tl.to(".text-area-hover h2",{
    delay: -0.4,
    width:"100%"
})
// tl.to(".text-area-hover h3",{
//     delay: -0.45,
//     width:"100%"
// })