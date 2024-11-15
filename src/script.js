const settings = document.querySelector("#settings")
const menu = document.querySelector(".menu")

const bottle = document.querySelector("#bottle")
const bottleImage = document.querySelectorAll("#bottleImage")
const bottleGrid = document.querySelector(".bottle-grid")

const spinAudio = document.querySelector("#spinAudio")

function openMenu(){
    menu.classList.toggle("flex")
}
function openSubMenu(){
    bottleGrid.classList.toggle("subMenuBg")
}
function changeContent(img){
    bottle.src = img.src
    bottle.style.width = "calc(78vh - 350px)"
}
let animStart = false
let keyframes = `
     @keyframes spin {
    0%{
        transform:rotate(0deg);
    }
    50%{
        transform:rotate(${Math.random()*180});
        
    }
    100%{
        transform:rotate(${Math.random()*360});
    }
} 
`
function action(){
    if(spinAudio.play()){
        animStart = true
    }
    if(animStart == true){
        bottleImage.style = keyframes
    }
}