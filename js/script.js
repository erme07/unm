const option = document.querySelector(".selector__options");
const content = document.querySelector(".selector__content");

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
let slideNumber = 0;
let autoSlider = 0;


option.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('active')) return;
    for(i=0;i<option.children.length;i++){
        if(option.children[i].classList.contains('active')) option.children[i].classList.remove('active');
    }
    e.target.classList.add("active");
    for(i=0;i<content.children.length;i++){
        if(content.children[i].classList.contains('selected')) content.children[i].classList.remove('selected');
    }
    content.children[e.target.getAttribute('data-option')].classList.add('selected');
})

nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
    slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
    });
    slideNumber++;
    if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
    slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
    });
    slideNumber--;
    if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

const repeater = () => {
    autoSlider = setInterval(function(){
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });
    slideNumber++;
    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
    }, 5000);
}

repeater();

slider.addEventListener("mouseover", () => {
    clearInterval(autoSlider);
});
slider.addEventListener("mouseout", () => {
    repeater();
});