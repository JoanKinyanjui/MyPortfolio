
const timeline = gsap.timeline()
timeline
.from(
    '.myimg',{opacity :0,rotation: 180, duration: 8, ease: 'bounce'}
)
.from(
    '.profile',{x: '-100%', opacity: 0, ease:'power 2', duration:3}
)
.from(
    '.ordered-menu',
        {opacity:0}
    
)