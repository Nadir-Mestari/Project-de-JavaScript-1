

// document.querySelector('.box-quiz').style. background = "yellow"

const box = (document.querySelector('.box-quiz'))
const btn1 = (document.getElementById("btn-1") )
const btn2 = (document.getElementById("btn-2") )
const respenceFeu = (document.getElementById("p-feu"))
const respenceEau = (document.getElementById("p-eau"))
const mousemove = (document.querySelector("#image2"))

const keypress = document.querySelector(".keypress");

const key = document.getElementById("key")
const body = document.querySelector("body");



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

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(3) translate(-16%, -16%)";
    
 
})

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    
 
})
btn1.addEventListener("mouseenter", () => {
    btn1.classList.add("btn1-mouseenter")
  
})
btn1.addEventListener("mouseout", () => {
    btn1.classList.add("btn1-mouseout")
 
})
btn2.addEventListener("mouseenter", () => {
    btn2.classList.add("btn2-mouseenter")
  
})
btn2.addEventListener("mouseout", () => {
    btn2.classList.add("btn2-mouseout")
 
})



respenceFeu.addEventListener("mouseover", () => {
    respenceFeu.style.border = "7px solid black";
    
})
respenceEau.addEventListener("mouseover", () => {
    respenceEau.style.border = "7px solid white";
    
})

document.addEventListener("keypress" , (e) => {
    key.textContent = e.key
 
    if (e.key === "a"){
        keypress.style.background = "yellow"
        key.style.background = "yellow"
        body.style.background = "yellow"
    }
    if (e.key === "b"){
        keypress.style.background = "yellow"
        key.style.background = "yellow"
        body.style.background = "yellow"
    }
    if (e.key === "c"){
        keypress.style.background = "yellow"
        key.style.background = "yellow"
        body.style.background = "yellow"
    }
    if (e.key === "d"){
        keypress.style.background = "yellow"
        key.style.background = "yellow"
        body.style.background = "yellow"
    }
    if (e.key === "e"){
        keypress.style.background = "rgb(745,56,79)"
        key.style.background = "rgb(745,56,79)"
        body.style.background = "rgb(745,56,79)"
    }
    if (e.key === "f"){
        keypress.style.background = "rgb(14,56,8)"
        key.style.background = "rgb(14,56,8)"
        body.style.background = "rgb(14,56,8)"
    }
    if (e.key === "j"){
        keypress.style.background = "rgb(1459,569,899)"
        key.style.background = "rgb(1459,569,899)"
        body.style.background = "rgb(1459,569,899)"
    }
    if (e.key === "h"){
        keypress.style.background = "rgb(145,5600,89)"
        key.style.background = "rgb(145,5600,89)"
        body.style.background = "rgb(145,5600,89)"
    }
    if (e.key === "i"){
        keypress.style.background = "rgb(15,6,809)"
        key.style.background = "rgb(15,6,809)"
        body.style.background = "rgb(15,6,809)"
    }
    if (e.key === "g"){
        keypress.style.background = "rgb(1450,56,890)"
        key.style.background = "rgb(1450,56,890)"
        body.style.background = "rgb(1450,56,890)"
    }
    if (e.key === "k"){
        keypress.style.background = "rgb(1145,156,89)"
        key.style.background = "rgb(1145,156,89)"
        body.style.background = "rgb(1145,156,89)"
    }
    if (e.key === "l"){
        keypress.style.background = "rgb(145,1156,1189)"
        key.style.background = "rgb(145,1116,1189)"
        body.style.background = "rgb(145,1116,1189)"
    }
    if (e.key === "m"){
        keypress.style.background = "rgb(145,5,1119)"
        key.style.background = "rgb(145,5,1119)"
        body.style.background = "rgb(145,5,1119)"
    }
    if (e.key === "n"){
        keypress.style.background = "rgb(145,56,9)"
        key.style.background = "rgb(145,56,9)"
        body.style.background = "rgb(145,56,9)"
    }
    if (e.key === "o"){
        keypress.style.background = "rgb(45,6,89)"
        key.style.background = "rgb(45,6,89)"
        body.style.background = "rgb(45,6,89)"
    }
    if (e.key === "p"){
        keypress.style.background = "rgb(90,56,89)"
        key.style.background = "rgb(90,56,89)"
        body.style.background = "rgb(90,56,89)"
    }
    if (e.key === "q"){
        keypress.style.background = "rgb(15,56,89)"
        key.style.background = "rgb(15,56,89)"
        body.style.background = "rgb(15,56,89)"
    }
    if (e.key === "r"){
        keypress.style.background = "rgb(145,56,89)"
        key.style.background = "rgb(145,56,89)"
        body.style.background = "rgb(145,56,89)"
    }
    if (e.key === "s"){
        keypress.style.background = "blue"
        key.style.background = "blue"
        body.style.background = "blue"
    }
    if (e.key === "t"){
        keypress.style.background = "teal"
        key.style.background = "teal"
        body.style.background = "teal"
    }
    if (e.key === "u"){
        keypress.style.background = "white"
        key.style.background = "white"
        body.style.background = "white"
    }
    if (e.key === "v"){
        keypress.style.background = "black"
        key.style.background = "black"
        body.style.background = "black"
    }
    if (e.key === "w"){
        keypress.style.background = "green"
        key.style.background = "green"
        body.style.background = "green"
    }
    if (e.key === "y"){
        keypress.style.background = "pinck"
        key.style.background = "pinck"
        body.style.background = "pinck"
    }
    if (e.key === "z"){
        keypress.style.background = "red"
        key.style.background = "red"
        body.style.background = "red"
    }
 
    

})

key.style.height = 33 + "px"
key.style.width = 33 + "px"
key.style.background = "white"
key.style.position = "absolute"
key.style.top = "-20px"
key.style.left = 50 + "%"
key.style.transform = "translateX(-50%)"


