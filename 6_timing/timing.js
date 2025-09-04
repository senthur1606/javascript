console.log("start")

let display=()=>{
    console.log("i'm display function")
}

// display()

// ! setTimeout()
setTimeout(display,4000)
console.log("end")

let tt=setTimeout(()=>{
    console.log("I am set timeout")
},5000)


let wish=()=>{
      console.log("happy birthday")
}
setTimeout(wish,5000)

// ! setInterval()

// let sorry=()=>{
//     console.log("I am sorry")
// }
// setInterval(sorry,1000)

let st=setInterval(()=>{
    console.log("hello everyone")
},1000)

// ! clearTimeout()
clearTimeout(wish)
clearTimeout(tt)

// !clearInterval()
clearInterval(sorry)
clearInterval(st)
