console.log("this is external javascript")

//! how to declare a variable in javascript

//we have 3 keywords to declare a variable in javascript

//let, var, const

//! let keyword

let sname
sname="senthur"
console.log(sname)

let age=21
console.log(age)

// in let keyword re-declaration is not possible

// let sname="pandian"
// console.log(sname);

// --------------------------------------------------------------------------------------------------

// ! var keyword

var city
city="chennai"
console.log(city)

var havejob=true
console.log(havejob)

havejob=false
console.log(havejob)


// by using var keyword we can re-declare any variable

var city="banglore"
console.log(city);

// --------------------------------------------------------------------------------------------------

//! const keyword

// when we want to take constant value that we don't want to change we have to use const keyword

const aadhar=335567895674
console.log(aadhar);

// in const keyword we cannot re-assign or re-declare a variable

// const aadhar=true
// console.log(aadhar);

// aadhar=123456789012
// console.log(aadhar);

// --------------------------------------------------------------------------------------------------

// ! data types in javascript

// 1. primitive data types  2. non-primitive data types

//! 1. primitive data types

//! 1.number

let phno=9876543210  
console.log(phno);

//todo: typeof operator is used to find the data type of a variable
console.log(typeof phno);

let sal=25000
console.log(sal);
console.log(typeof sal)

// ! 2. boolean

let isstudent=true
console.log(isstudent)
console.log(typeof isstudent)

// ! 3.string

let cname="chennai"
let state='tamil nadu'
let country=`india`
console.log(cname)
console.log(state)
console.log(country)

console.log(typeof cname)

//! 4. undefined

//lvariable declared but not intialized is called undefined
let coursename
console.log(coursename)
console.log(typeof coursename)

//! 5.null
let bonus=null;
console.log(bonus)
console.log(typeof bonus) //object

//! 6.bigint

let largenum= 2n
console.log(largenum)
console.log(typeof largenum)

// ! 2. non primitive data types

// array, function ,object

//! 1. array

let arr = [20,"html",true,undefined]
console.log(arr)

//! 2. function

function add()
{
  console.log("I am add function")
}
add()

//! 3.object

let emp = {
    ename:"senthur",
    eid:3451,
    location:"chennai"
}

console.log(emp);




