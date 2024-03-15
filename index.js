

// document.querySelector('.box-quiz').style. background = "yellow"

const box = (document.querySelector('.box-quiz'))
const btn1 = (document.getElementById("btn-1") )
const btn2 = (document.getElementById("btn-2") )
const respenceFeu = (document.getElementById("p-feu"))
const respenceEau = (document.getElementById("p-eau"))
const mousemove = (document.querySelector("#image2"))
console.log(mousemove);


console.log(btn1, btn2);
console.log(box);



box.style.borderRadius = "100px"
box.style.background = "trasparent"




btn1.addEventListener("click", () =>{
    btn1.classList.toggle("btn-clicked-false")
    respenceFeu.classList.toggle("p-respence")
})
btn2.addEventListener("click", () =>{
    btn2.classList.toggle("btn-clicked-true")
    respenceEau.classList.toggle("p-respence")
})

window.addEventListener("mousemove", (e) => {
    mousemove.style.top = e.pageY + "px"
    mousemove.style.left = e.pageX + "px"
 
})

window.addEventListener("mouseup", (e) => {
   mousemove.style.transform = "scale(1) translate(-30%, -30%)"
 
})

window.addEventListener("mousedown", (e) => {
    mousemove.style.transform = "scale(2) translate(-30%, -30%)"
 
})




