// ! named function 

function display()
{
    console.log("i am display function")
}
display()

// ! function with parameters

function add(a,b)
{
    console.log(`addition of ${a} and ${b} is ${a+b}`)
}
add(2,8)
add(10,20)

// ! function with return keyword

function sub(a,b)
{
    return a-b;
}
let res=sub(10,5)
console.log(res)

console.log(sub(10,5))

// ! function with expression

let a=function()
{
    console.log("I am anonymous function")
}
a()

// ! Arrow function
let arrow = () =>{
    console.log("I am arrow function")
}
arrow()

// ! nested function
let outer = ()=>{
    console.log("I am outer function")
    let inner =()=>{
        console.log("I am inner function")
    }
    inner()
}
outer()

// ! Lexical Scopping

//  in nested function inner functin can access all the properties of outer function but the outer funtion can't access the property of inner function, this is called Lexical scoping

let parent = () =>{
    let a=10
    let child =() =>{
        let b =20
        console.log(a)
        console.log(b)
    }
    child()
}
parent()


// ! Higher order function and callback Function ***

// any function that takes another function as parameter is called higherorder function.
// the function we are sending to the higher order function as parameter is called callback function.

let hof =(a)=>{
    console.log("i am higher order function")
    a()
}

hof(()=>{
    console.log("i am calback function")
});

// ! IIFE(Immediate Invoke Function Expression)

(function(){
    console.log("I am IIFE Function")
})()