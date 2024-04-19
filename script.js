let lineActive = document.querySelector(".line-active")
const items = [...document.querySelectorAll(".nav-item")]
let colors = ["orange", "yellow", "purple", "green", "white", "aqua", "red", "indigo", "lightblue", "pink"]
var r = document.querySelector(':root');

items[0].addEventListener('click', ()=>{
    var rs = getComputedStyle(r);
    r.style.setProperty('--main-color', colors[Math.floor(Math.random()*10)]);
    items[0].style.boxShadow = '0px 0px 15px var(--main-color)';
    items[1].style.boxShadow = '0px 0px 0px var(--main-color)';
    items[2].style.boxShadow = '0px 0px 0px var(--main-color)';
    items[3].style.boxShadow = '0px 0px 0px var(--main-color)';
    lineActive.style.width = "0px"
})

items[1].addEventListener('click', ()=>{
    var rs = getComputedStyle(r);
    r.style.setProperty('--main-color', colors[Math.floor(Math.random()*10)]);
    items[1].style.boxShadow = '0px 0px 15px var(--main-color)';
    items[2].style.boxShadow = '0px 0px 0px var(--main-color)';
    items[3].style.boxShadow = '0px 0px 0px var(--main-color)';
    lineActive.style.width = "300px"
})

items[2].addEventListener('click', ()=>{
    var rs = getComputedStyle(r);
    r.style.setProperty('--main-color', colors[Math.floor(Math.random()*10)]);
    items[2].style.boxShadow = '0px 0px 15px var(--main-color)';
    items[3].style.boxShadow = '0px 0px 0px var(--main-color)';
    lineActive.style.width = "600px"

})

items[3].addEventListener('click', ()=>{
    var rs = getComputedStyle(r);
    r.style.setProperty('--main-color', colors[Math.floor(Math.random()*10)]);
    items[3].style.boxShadow = '0px 0px 15px var(--main-color)';
    lineActive.style.width = "900px"

})