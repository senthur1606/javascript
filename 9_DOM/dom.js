// ! how to target elements

// by id
let logo = document.getElementById("logo")

console.log(logo)

// by classname

let card=document.getElementsByClassName("card")
console.log(card)

let secondcard=card[1]

console.log(secondcard)

let button=document.getElementsByClassName("btn")
console.log(button)
let btn=button[0]
console.log(btn)

// by tag name

let list=document.getElementsByTagName('li')
console.log(list)
let li=list[2]
console.log(li)

// quaryselector

let que=document.querySelector('#logo')
console.log(que)

let card1=document.querySelector('.card')
console.log(card1)

// querySelectorAll

let c= document.querySelectorAll(".card")
console.log(c[1])

// how to get or set content inside element

console.log(card[1].innerText)
console.log(card[1].innerHTML)

card[2].innerHTML='<h1>Hi every one</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi saepe earum dolores laborum cupiditate veritatis ipsa! Adipisci necessitatibus minus corporis reiciendis soluta nihil dolorum nobis reprehenderit at possimus? Laboriosam.</p>'

// card[2].innerText='<h1>Hi every one</h1>'