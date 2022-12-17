const option = document.querySelector(".selector__options");
const content = document.querySelector(".selector__content");

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