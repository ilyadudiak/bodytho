
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });
const tl = gsap.timeline();
tl.fromTo('.animation-block1', { y: '+100%' }, { y: 0 });
tl.fromTo('.animation-block2', { y: '+200%' }, { y: '-100%' });
tl.fromTo('.animation-block3', { y: '+300%' }, { y: '-200%' });


ScrollTrigger.create({
    animation: tl,
    trigger: '.animation-blocks',
    start: 'top top',
    end: 'bottom',
    scrub: true,
    pin: true,
});