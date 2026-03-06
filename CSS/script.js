let green=0;

function myFunction() {
    if (confirm("ボタンを選択してください")) {
        alert("サンプルテキスト パイナップルは好きではありません");
    }
    else{
        alert("chicken nuggets");
        window.location.href = "nevergonnagiveyouup.html";
        // redirects the user to a new page when they click the button
    }
}


function BigButton() {
    alert("sdhdushudssudhwu" + green);
    green=green+1;
    document.cookie = "green=" + green;
}
function change(){
    document.getElementById("change").textContent = "chicken nuggets";
    document.getElementById("change").style.backgroundColor = "red";
    document.getElementById("change").style.padding = "20px";
}
function offload(){
    document.getElementById("change").textContent = "Hover over me!";
    document.getElementById("change").style.backgroundColor = "initial";
    document.getElementById("change").style.padding = "initial";
}
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
