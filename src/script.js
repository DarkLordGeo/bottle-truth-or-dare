const settings = document.querySelector("#settings")
const menu = document.querySelector(".menu")

const bottle = document.querySelector("#bottle")
const bottleImage = document.querySelectorAll("#bottleImage")
const bottleGrid = document.querySelector(".bottle-grid")


function openMenu(){
    menu.classList.toggle("flex")
}

function openSubMenu(){
    bottleGrid.classList.toggle("subMenuBg")
}

function changeContent(img){
    img.style.width = "300px"
    bottle.src = img.src
}
