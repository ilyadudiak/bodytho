gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'none', duration: 2 });

function headerHeight() {
    let windowWidth = $(window).width();
    return windowWidth < 510 ? 70 : 100;
}

function pinAnimation(elementId) {
    const tl = gsap.timeline();
    const $rootElement = document.getElementById(elementId);
    const $animationBlock2 = $rootElement.querySelector('.animation-block2');
    const $animationBlock3 = $rootElement.querySelector('.animation-block3');

    tl.fromTo($animationBlock2, { yPercent: 0 }, { yPercent: -90 });

    if ($animationBlock3) {
        tl.fromTo($animationBlock3, { yPercent: 0 }, { yPercent: -80 });
    }

    ScrollTrigger.create({
        animation: tl,
        trigger: $rootElement,
        start: `top-=${headerHeight()}px top`,
        end: 'bottom',
        scrub: true,
        pin: true, 
    });
    ScrollTrigger.refresh();
}


document.addEventListener("DOMContentLoaded", function () {
    pinAnimation('animation-blocks-1');
    pinAnimation('animation-blocks-3');
    pinAnimation('animation-blocks-2');

    ScrollTrigger.refresh();
});

$('.slider-block__slider').slick({
    arrows: false,
    dots: true
});

const mainNav = document.querySelector('.nav-main');
const nav1 = document.querySelector('.nav-1');
const nav2 = document.querySelector('.nav-2');
const nav3 = document.querySelector('.nav-3');

document.querySelector('.header-burger').addEventListener('click', function () {
    mainNav.classList.add('nav-main-show');
    document.body.style.overflow = 'hidden';
});

document.querySelector('#closeMainBtn').addEventListener('click', function () {
    mainNav.classList.remove('nav-main-show');
    mainNav.classList.add('nav-main-hide');
    setTimeout(() => {
        mainNav.classList.remove('nav-main-hide');
        document.body.style.overflow = 'auto';
    }, 1000);
});
document.querySelector('#closeMainBtn2').addEventListener('click', function () {
    mainNav.classList.remove('nav-main-show');
    mainNav.classList.add('nav-main-hide');
    setTimeout(() => {
        mainNav.classList.remove('nav-main-hide');
        document.body.style.overflow = 'auto';
    }, 1000);
});

document.querySelector('#openNav1').addEventListener('click', function () {
    nav1.classList.add('nav-show');
});
document.querySelector('#closeNav1').addEventListener('click', function () {
    nav1.classList.remove('nav-show');
    nav1.classList.add('nav-hide');
    setTimeout(() => {
        nav1.classList.remove('nav-hide');
    }, 1000);
});
document.querySelector('#openNav2').addEventListener('click', function () {
    nav2.classList.add('nav-show');
});
document.querySelector('#closeNav2').addEventListener('click', function () {
    nav2.classList.remove('nav-show');
    nav2.classList.add('nav-hide');
    setTimeout(() => {
        nav2.classList.remove('nav-hide');
    }, 1000);
});
document.querySelector('#openNav3').addEventListener('click', function () {
    nav3.classList.add('nav-show');
});
document.querySelector('#closeNav3').addEventListener('click', function () {
    nav3.classList.remove('nav-show');
    nav3.classList.add('nav-hide');
    setTimeout(() => {
        nav3.classList.remove('nav-hide');
    }, 1000);
});

document.querySelector('#closeAllNav1').addEventListener('click', () => {
    mainNav.classList.remove('nav-main-show');
    nav1.classList.remove('nav-show');
    nav1.classList.add('nav-hide');
    setTimeout(() => {
        nav1.classList.remove('nav-hide');
        document.body.style.overflow = 'auto';
    }, 1000);
});
document.querySelector('#closeAllNav2').addEventListener('click', () => {
    mainNav.classList.remove('nav-main-show');
    nav1.classList.remove('nav-show');
    nav2.classList.remove('nav-show');
    nav2.classList.add('nav-hide');
    setTimeout(() => {
        nav2.classList.remove('nav-hide');
        document.body.style.overflow = 'auto';
    }, 1000);
});
document.querySelector('#closeAllNav3').addEventListener('click', () => {
    mainNav.classList.remove('nav-main-show');
    nav1.classList.remove('nav-show');
    nav2.classList.remove('nav-show');
    nav3.classList.remove('nav-show');
    nav3.classList.add('nav-hide');
    setTimeout(() => {
        nav3.classList.remove('nav-hide');
        document.body.style.overflow = 'auto';
    }, 1000);
});


const searchWraps = document.querySelectorAll('.search-btn__wrapper');
searchWraps.forEach(el=>{
    el.querySelector('button').addEventListener('click', function(){
        if(el.classList.contains('search-btn_active')){
            el.classList.remove('search-btn_active');
            el.classList.add('search-btn_disabled');
            setTimeout(()=>{
                el.classList.remove('search-btn_disabled');
            }, 500);
        } else{
            el.classList.add('search-btn_active');
        }

        
    });
});



const $mainPopup = document.querySelector('.main-popup');
const mainPopup = {
    openMainPopup: function(){
        
        document.body.style.overflow = 'hidden';
        $mainPopup.style.display = 'flex';
        $mainPopup.classList.add('stage1');
    },

    changeStage: function(stageNum){
        $mainPopup.classList.remove('stage1');
        $mainPopup.classList.remove('stage2');
        $mainPopup.classList.remove('stage3');
        $mainPopup.classList.add(`stage${stageNum}`);
    },
    closeMainPopup: function(){
        document.body.style.overflow = 'auto';
        $mainPopup.style.display = 'none';
        $mainPopup.classList.remove('stage1');
        $mainPopup.classList.remove('stage2');
        $mainPopup.classList.remove('stage3');
    }
};

const $openPopupBtns = document.querySelectorAll('#openMainPopup');
$openPopupBtns.forEach(el=>{
    el.addEventListener('click', mainPopup.openMainPopup);
});


document.querySelector('#moveToStage2').addEventListener('submit', (e)=>{
    e.preventDefault();
    mainPopup.changeStage(2);
} );
document.querySelector('#moveToStage1').addEventListener('click', ()=>{
    mainPopup.changeStage(1);
} );
document.querySelector('#moveToStage3').addEventListener('click', ()=>{
    mainPopup.changeStage(3);
} );

document.querySelectorAll('#closeMainPopup').forEach(el=>{
    el.addEventListener('click', ()=>{
        mainPopup.closeMainPopup();
    })
})

