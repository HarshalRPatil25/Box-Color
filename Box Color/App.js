let btn1 = document.querySelector(".box1");
let btn2 = document.querySelector(".box2");
let btn3 = document.querySelector(".box3");
let btn4 = document.querySelector(".box4");
let btn5 = document.querySelector(".box5");
let btn6 = document.querySelector(".box6");
btn1.addEventListener('click', () => {
    let body=document.querySelector("body");
    body.style.backgroundColor=btn1.innerText;
    btn1.style.border="2px solid white";
   
});
btn2.addEventListener('click', () => {
    let body=document.querySelector("body");
    body.style.backgroundColor=btn2.innerText;
    btn2.style.border="2px solid white";
});
btn3.addEventListener('click', () => {
    let body=document.querySelector("body");
    body.style.backgroundColor=btn3.innerText;
    btn3.style.border="2px solid white";
});
btn4.addEventListener('click', () => {
    let body=document.querySelector("body");
    body.style.backgroundColor=btn4.innerText;
    btn4.style.border="2px solid white";
});
btn5.addEventListener('click', () => {
    let body=document.querySelector("body");
    body.style.backgroundColor=btn5.innerText;
    btn5.style.border="2px solid white";
});
btn6.addEventListener('click', () => {
    let body=document.querySelector("body");
   
    body.style.backgroundColor=btn6.innerText;
   
    btn6.style.border="2px solid white";
});