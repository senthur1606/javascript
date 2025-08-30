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