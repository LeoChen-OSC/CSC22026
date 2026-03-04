new Swiper("#swiper-1", {

    effect: "fade", //cube, fade, coverflow, flip
    slidesPerView: "auto", //number of slides per view
    centeredSlides: true, //center the active slide
   

    navigation: {
        nextEl: ".swiper-button-next", //previous and next buttons
        prevEl: ".swiper-button-prev",
    },

    // freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,

        // type: "progressbar",
        // type:"fraction",

    },
    loop: true,
    autoplay: { //automatic plays the swiper
       delay: 2000, //delay time
    },
})

new Swiper("#swiper-2", {

    effect: "fade", //cube, fade, coverflow, flip
    slidesPerView: "auto", //number of slides per view
    centeredSlides: true, //center the active slide
   

    navigation: {
        nextEl: ".swiper-button-next", //previous and next buttons
        prevEl: ".swiper-button-prev",
    },

    // freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,

        // type: "progressbar",
        // type:"fraction",

    },
    loop: true,
    autoplay: { //automatic plays the swiper
       delay: 2000, //delay time
    },
})
