
const timeline = gsap.timeline()
timeline
.from(
    '.myimg',{opacity :0,rotation: 180, duration: 5, ease: 'bounce',scale: 0.3}
)
.from(
    '.profile',{x: '-100%', opacity: 0, ease:'power 2', duration:3}
)
