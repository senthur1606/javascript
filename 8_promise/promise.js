// we can create Promise using new keyword
// it will take on callback function there it will take two parameters(resolve,reject)
// for handling the resolve we need ,then() block and for handling the reject we need, catch() block.
// promise having 3 states(pending,fulfilled,rejected)



let p=new Promise((resolve,reject)=>{

    let studied=false

    if(studied)
    {
        resolve("I will give mock")
    }

    else{
        reject("I will not give mock bcz i'm not prepared")
    }

})
console.log(p)

p.then((data)=>{
    console.log(data)
})
.catch((arr)=>{
    console.log(arr)
})
.finally(
    console.log('I am finally block')
)

// let p1= new Promise((resolve,reject)=>{

//     let stu=true

//     if(stu)
//     {
//         console.log("go to the exam")
//     }
//     else{
//         console.log("not go the exam")
//     }

// })

// console.log(p1)

// p1.then((data)=>{
//     console.log(data)
// })

// .catch((arr)=>{

//     console.log(arr)
// })

// .finally(
//     console.log("go to study")
// )