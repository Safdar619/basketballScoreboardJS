// javascript

let hscoreEL = document.getElementById("hscore-el")
let gscoreEL = document.getElementById("gscore-el")
let hcount=0
let gcount=0

function hadd1(){
    hcount = hcount + 1
    hscoreEL.textContent = hcount
}
function hadd2(){
    hcount = hcount + 2
    hscoreEL.textContent = hcount
}
function hadd3(){
    hcount = hcount + 3
    hscoreEL.textContent = hcount
}
function hreset(){
    hcount = 0
    hscoreEL.textContent = hcount
}

function gadd1(){
    gcount = gcount + 1
    gscoreEL.textContent = gcount
}
function gadd2(){
    gcount = gcount + 2
    gscoreEL.textContent = gcount
}
function gadd3(){
    gcount = gcount + 3
    gscoreEL.textContent = gcount
}
function greset(){
    gcount = 0
    gscoreEL.textContent = gcount
}