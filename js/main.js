// добавление интервала по времени при загрузке стр
function preloader(){
    $(() => {
        setInterval(() => {
            var p = $('.preloader');

            p.css('opacity', 0);

            setInterval(
                () =>p.remove(),
                parseInt(p.css('--duration'))*1000
            )
        }, 1000);
    });
}


// использование функции выше
setInterval(() => preloader(), 3000);


$(document).ready(function(){
   
// функция для иметации печатания
    var typed = new Typed(".typing", {
        strings: ["Hello!", "WELCOME"],
        typeSpeed:5,
        BackSpeed:10,
        loop: true
    });   
// для смены иконок при нажатии, с солнца на луну и наоборот
    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");  
    document.body.classList.toggle("sun")
    });
    window.addEventListener("load", () =>{
        if(document.body.classList.contains("sun")){
            dayNight.querySelector("i").classList.add("fa-moon");
        }
        else{
            dayNight.querySelector("i").classList.add("fa-sun");
        }
    });
});
// тут функции для анимации карточек при загрузке и активирующиеся при скролле страницы

$(function(){
$(window).scroll(function(){
    $('.about__text').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+670){
            $(this).addClass("animate__fadeInLeftBig")
        }
    });
});
$(window).scroll(function(){
    $('.about__info').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+670){
            $(this).addClass("animate__fadeInRightBig")
        }
    });
});
$(window).scroll(function(){
    $('.about__text').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+670){
            $(this).addClass("animate__fadeInLeftBig")
        }
    });
});
$(window).scroll(function(){
    $('.skill__cards').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+670){
            $(this).addClass("animate__fadeInUpBig")
        }
    });
});
$(window).scroll(function(){
    $('.road').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+670){
            $(this).addClass("animate__zoomInDown")
        }
    });
});
$(window).scroll(function(){
    $('.services__row contact__row').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+670){
            $(this).addClass("animate__slideInUp")
        }
    });
});
$(window).scroll(function(){
    $('.contact__row').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+670){
            $(this).addClass("animate__slideInUp")
        }
    });
});
});