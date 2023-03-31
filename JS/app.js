const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)

        if (entry.isIntersecting) {
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        }
    });
},
    { rootMargin: "-50% 0px -50% 0px" }
);

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function () {
        menu.classList.remove("menu_opened");
    })

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
})

let hideText_btnUnlp = document.getElementById("hideText_btnUnlp");

let hideTextUnlp = document.getElementById("hideTextUnlp");

hideText_btnUnlp.addEventListener("click", toggleTextUnlp);

function toggleTextUnlp(){
    hideTextUnlp.classList.toggle("show");
    if(hideTextUnlp.classList.contains("show")){
        hideText_btnUnlp.innerHTML = "Leer menos";
    }
    else {
        hideText_btnUnlp.innerHTML = "Leer más";
    }
}

let hideText_btnUtn = document.getElementById("hideText_btnUtn");

let hideTextUtn = document.getElementById("hideTextUtn");

hideText_btnUtn.addEventListener("click", toggleTextUtn);

function toggleTextUtn(){
    hideTextUtn.classList.toggle("show");
    if(hideTextUtn.classList.contains("show")){
        hideText_btnUtn.innerHTML = "Leer menos";
    }
    else {
        hideText_btnUtn.innerHTML = "Leer más";
    }
}

let hideText_btnCap= document.getElementById("hideText_btnCap");

let hideTextCap = document.getElementById("hideTextCap");

hideText_btnCap.addEventListener("click", toggleTextCap);

function toggleTextCap(){
    hideTextCap.classList.toggle("show");
    if(hideTextCap.classList.contains("show")){
        hideText_btnCap.innerHTML = "Leer menos";
    }
    else {
        hideText_btnCap.innerHTML = "Leer más";
    }
}

let hideText_btnAbsa2= document.getElementById("hideText_btnAbsa2");

let hideTextAbsa2 = document.getElementById("hideTextAbsa2");

hideText_btnAbsa2.addEventListener("click", toggleTextAbsa2);

function toggleTextAbsa2(){
    hideTextAbsa2.classList.toggle("show");
    if(hideTextAbsa2.classList.contains("show")){
        hideText_btnAbsa2.innerHTML = "Leer menos";
    }
    else {
        hideText_btnAbsa2.innerHTML = "Leer más";
    }
}

let hideText_btnAbsa1= document.getElementById("hideText_btnAbsa1");

let hideTextAbsa1 = document.getElementById("hideTextAbsa1");

hideText_btnAbsa1.addEventListener("click", toggleTextAbsa1);

function toggleTextAbsa1(){
    hideTextAbsa1.classList.toggle("show");
    if(hideTextAbsa1.classList.contains("show")){
        hideText_btnAbsa1.innerHTML = "Leer menos";
    }
    else {
        hideText_btnAbsa1.innerHTML = "Leer más";
    }
}

let hideText_btnA= document.getElementById("hideText_btnA");

let hideTextA = document.getElementById("hideTextA");

hideText_btnA.addEventListener("click", toggleTextA);

function toggleTextA(){
    hideTextA.classList.toggle("show");
    if(hideTextA.classList.contains("show")){
        hideText_btnA.innerHTML = "Leer menos";
    }
    else {
        hideText_btnA.innerHTML = "Leer más";
    }
}


let hideText_btnY= document.getElementById("hideText_btnY");

let hideTextY = document.getElementById("hideTextY");

hideText_btnY.addEventListener("click", toggleTextY);

function toggleTextY(){
    hideTextY.classList.toggle("show");
    if(hideTextY.classList.contains("show")){
        hideText_btnY.innerHTML = "Leer menos";
    }
    else {
        hideText_btnY.innerHTML = "Leer más";
    }
}

let hideText_btnDo= document.getElementById("hideText_btnDo");

let hideTextDo = document.getElementById("hideTextDo");

hideText_btnDo.addEventListener("click", toggleTextDo);

function toggleTextDo(){
    hideTextDo.classList.toggle("show");
    if(hideTextDo.classList.contains("show")){
        hideText_btnDo.innerHTML = "Leer menos";
    }
    else {
        hideText_btnDo.innerHTML = "Leer más";
    }
}

let hideText_btnRef1= document.getElementById("hideText_btnRef1");

let hideTextRef1 = document.getElementById("hideTextRef1");

hideText_btnRef1.addEventListener("click", toggleTextRef1);

function toggleTextRef1(){
    hideTextRef1.classList.toggle("show");
    if(hideTextRef1.classList.contains("show")){
        hideText_btnRef1.innerHTML = "Leer menos";
    }
    else {
        hideText_btnRef1.innerHTML = "Leer más";
    }
}

let hideText_btnRef2= document.getElementById("hideText_btnRef2");

let hideTextRef2 = document.getElementById("hideTextRef2");

hideText_btnRef2.addEventListener("click", toggleTextRef2);

function toggleTextRef2(){
    hideTextRef2.classList.toggle("show");
    if(hideTextRef2.classList.contains("show")){
        hideText_btnRef2.innerHTML = "Leer menos";
    }
    else {
        hideText_btnRef2.innerHTML = "Leer más";
    }
}