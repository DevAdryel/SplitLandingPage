const container= document.querySelector('.container')


const left = document.querySelector('.left')
const right = document.querySelector('.right')


left.onmouseenter = function myEnterFunction(){
    container.classList.add("hover-left")
}

left.onmouseleave = function myLeaveFunction(){
    container.classList.remove("hover-left")
}

right.onmouseenter = function myEnterFunction(){
    container.classList.add("hover-right")
}

right.onmouseleave = function myLeaveFunction(){
    container.classList.remove("hover-right")
}
