

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
const ring = () => {
    const audio = new Audio();
    audio.src ="./sounds/Enter.mp3"
    audio.play();
}
const ring1 = () => {
    const audio1 = new Audio();
    audio1.src ="./sounds/1.mp3"
    audio1.play();
}
const ring2 = () => {
    const audio2 = new Audio();
    audio2.src ="./sounds/2.mp3"
    audio2.play();
}
const ring3 = () => {
    const audio3 = new Audio();
    audio3.src ="./sounds/3.mp3"
    audio3.play();
}
const ring4 = () => {
    const audio4 = new Audio();
    audio4.src ="./sounds/4.mp3"
    audio4.play();
}
const ring5 = () => {
    const audio5 = new Audio();
    audio5.src ="./sounds/5.mp3"
    audio5.play();
}
const ring6 = () => {
    const audio6 = new Audio();
    audio6.src ="./sounds/6.mp3"
    audio6.play();
}
const ring7 = () => {
    const audio7 = new Audio();
    audio7.src ="./sounds/7.mp3"
    audio7.play();
}
const ring8 = () => {
    const audio8 = new Audio();
    audio8.src ="./sounds/8.mp3"
    audio8.play();
}
const ring9 = () => {
    const audio9 = new Audio();
    audio9.src ="./sounds/9.mp3"
    audio9.play();
}
const ring10 = () => {
    const audio10 = new Audio();
    audio10.src ="./sounds/10.mp3"
    audio10.play();
}
const ring11 = () => {
    const audio11 = new Audio();
    audio11.src ="./sounds/11.mp3"
    audio11.play();
}
const ring13 = () => {
    const audio13 = new Audio();
    audio13.src ="./sounds/13.mp3"
    audio13.play();
}
const ring12 = () => {
    const audio12 = new Audio();
    audio12.src ="./sounds/12.mp3"
    audio12.play();
}
const ring14 = () => {
    const audio14 = new Audio();
    audio14.src ="./sounds/14.mp3"
    audio14.play();
}
const ring15 = () => {
    const audio15 = new Audio();
    audio15.src ="./sounds/15.mp3"
    audio15.play();
}
const ring16 = () => {
    const audio16 = new Audio();
    audio16.src ="./sounds/16.mp3"
    audio16.play();
}
const ring17 = () => {
    const audio17 = new Audio();
    audio17.src ="./sounds/17.mp3"
    audio17.play();
}
const ring18 = () => {
    const audio18 = new Audio();
    audio18.src ="./sounds/18.mp3"
    audio18.play();
}
const ring19 = () => {
    const audio19 = new Audio();
    audio19.src ="./sounds/19.mp3"
    audio19.play();
}
const ring20 = () => {
    const audio20 = new Audio();
    audio20.src ="./sounds/20.mp3"
    audio20.play();
}

const nav = document.querySelector("nav");



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
    key.style.color = "white"
    
 
    if (e.key === "a"){
        keypress.style.background = "yellow"
        key.style.background = "yellow"
        body.style.background = "red"
        ring();
    }
    if (e.key === "b"){
        keypress.style.background = "yellow"
        key.style.background = "yellow"
        body.style.background = "rgb(1459,569,899)"
        ring1();
    }
    if (e.key === "c"){
        keypress.style.background = "yellow"
        key.style.background = "yellow"
        body.style.background = "rgb(14,56,8)"
        ring2();
    }
    if (e.key === "d"){
        keypress.style.background = "yellow"
        key.style.background = "yellow"
        body.style.background = "rgb(745,56,79)"
        ring3();
    }
    if (e.key === "e"){
        keypress.style.background = "rgb(745,56,79)"
        key.style.background = "rgb(745,56,79)"
        body.style.background = "yellow"
        ring4();
    }
    if (e.key === "f"){
        keypress.style.background = "rgb(14,56,8)"
        key.style.background = "rgb(14,56,8)"
        body.style.background = "yellow"
        ring5();
    }
    if (e.key === "j"){
        keypress.style.background = "rgb(1459,569,899)"
        key.style.background = "rgb(1459,569,899)"
        body.style.background = "rgb(1459,569,99)"
        ring6();
    }
    if (e.key === "h"){
        keypress.style.background = "rgb(145,5600,89)"
        key.style.background = "rgb(145,5600,89)"
        body.style.background = "rgb(145,00,89)"
        ring7();
    }
    if (e.key === "i"){
        keypress.style.background = "rgb(15,6,809)"
        key.style.background = "rgb(15,6,809)"
        body.style.background = "rgb(15,600,809)"
        ring8();
    }
    if (e.key === "g"){
        keypress.style.background = "rgb(1450,56,890)"
        key.style.background = "rgb(1450,56,890)"
        body.style.background = "rgb(145,56,890)"
        ring9();
    }
    if (e.key === "k"){
        keypress.style.background = "rgb(1145,156,89)"
        key.style.background = "rgb(1145,156,89)"
        body.style.background = "rgb(145,156,89)"
        ring10();
    }
    if (e.key === "l"){
        keypress.style.background = "rgb(145,1156,1189)"
        key.style.background = "rgb(145,1116,1189)"
        body.style.background = "rgb(1,116,1189)"
        ring11();
    }
    if (e.key === "m"){
        keypress.style.background = "rgb(145,5,1119)"
        key.style.background = "rgb(145,5,1119)"
        body.style.background = "rgb(145,5,119)"
        ring12();
    }
    if (e.key === "n"){
        keypress.style.background = "rgb(145,56,9)"
        key.style.background = "rgb(145,56,9)"
        body.style.background = "rgb(145,56,900)"
        ring14();
    }
    if (e.key === "o"){
        keypress.style.background = "rgb(45,6,89)"
        key.style.background = "rgb(45,6,89)"
        body.style.background = "rgb(45,6,890)"
        ring15();
    }
    if (e.key === "p"){
        keypress.style.background = "rgb(90,56,89)"
        key.style.background = "rgb(90,56,89)"
        body.style.background = "rgb(90,560,89)"
        ring16();
    }
    if (e.key === "q"){
        keypress.style.background = "rgb(15,56,89)"
        key.style.background = "rgb(15,56,89)"
        body.style.background = "rgb(150,56,89)"
        ring17();
    }
    if (e.key === "r"){
        keypress.style.background = "rgb(145,56,89)"
        key.style.background = "rgb(145,56,89)"
        body.style.background = "rgb(15,56,89)"
        ring18();
    }
    if (e.key === "s"){
        keypress.style.background = "blue"
        key.style.background = "blue"
        body.style.background = "teal"
        ring19();
    }
    if (e.key === "t"){
        keypress.style.background = "teal"
        key.style.background = "teal"
        body.style.background = "blue"
        ring20();
    }
    if (e.key === "u"){
        keypress.style.background = "white"
        key.style.background = "white"
        body.style.background = "black"
        ring();
    }
    if (e.key === "v"){
        keypress.style.background = "black"
        key.style.background = "black"
        body.style.background ="white"
        ring();
    }
    if (e.key === "w"){
        keypress.style.background = "green"
        key.style.background = "green"
        body.style.background = "pinck"
        ring();
    }
    if (e.key === "y"){
        keypress.style.background = "pinck"
        key.style.background = "pinck"
        body.style.background = "green"
        ring();
    }
    if (e.key === "z"){
        keypress.style.background = "red"
        key.style.background = "red"
        body.style.background = "yellow"
        ring();
    }
 
    

})

key.style.height = 33 + "px"
key.style.width = 33 + "px"
key.style.background = "white"
key.style.position = "absolute"
key.style.top = "-20px"
key.style.left = 50 + "%"
key.style.transform = "translateX(-50%)"
key.style.borderRadius = "100px"


window.addEventListener("scroll" , () => {
    console.log(window.scrollY);
    if (window.scrollY < 300){
        nav.style.top = "-50px";
    } else {
        nav.style.top = 0;
    }
    
})

//-------------------Form----------------------------

const inputText = document.querySelector("input[type=text]")
const select = document.querySelector("select")

let inputT = ""
let selectT= ""

inputText.addEventListener("input", (e) => {
   inputT = e.target.value
   console.log(inputT);

} )
select.addEventListener("input", (e) => {
    selectT = e.target.value
    console.log(selectT)

} )
