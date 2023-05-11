const option = document.querySelector(".tabs__options"),
    content = document.querySelector(".tabs__content"),
    menu = document.querySelector(".menu"),

    slider = document.querySelector(".slider"),
    slides = document.querySelector(".slider__content"),
    slider_nav= document.querySelector(".slider__nav"),
    numberOfSlides = slides.childElementCount;

let slideNumber = 0, auto = 0;

const desactivar = ()=>{
    Array.from(slides.children).forEach(element => {
            element.classList.remove("active")
        });
    Array.from(slider_nav.children).forEach(element =>{
        element.classList.remove("active");
    });
}
const activar = ()=>{
    slides.children[slideNumber].classList.add("active");
    slider_nav.children[slideNumber].classList.add("active");
}
const nextSlide = ()=>{
    slideNumber++;
    if(slideNumber>numberOfSlides-1){
        slideNumber=0;
    }
    desactivar();
    activar()
}

const autoSlide = () => {
    auto = setInterval(()=>{
    nextSlide();
    }, 5000);
}

slider.addEventListener("mouseover", () => {
    clearInterval(auto);
});
slider.addEventListener("mouseout", () => {
    autoSlide();
});

document.addEventListener("click", (e)=>{
    if(e.target.getAttribute("id") === "button_toggle"){
        menu.classList.toggle("mostrar");
    }
    if(e.target.getAttribute("data-name") === "slide-number"){
        desactivar();
        e.target.classList.add("active");
        slides.children[e.target.getAttribute("data-value")].classList.add("active");
        slideNumber = Number(e.target.getAttribute("data-value"));
    }
    if(e.target.getAttribute("data-name") === 'prev'){
        slideNumber--;
        if(slideNumber<0){
            slideNumber=numberOfSlides-1;
        }
        desactivar();
        activar();
    }
    if(e.target.getAttribute("data-name") === 'next'){
        nextSlide();
    }
});

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

autoSlide();