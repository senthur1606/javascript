let arr=[20,"str",true,[4,9]]
console.log(arr)

// ! how to know the leangth of array
console.log(arr.length)

// ! Array Methods

// ! 1.push()

// it is used to add element at the end of array.
// it will return length of modified array

let arr1=[20,30,40]
let a=arr1.push(50)
console.log(a) //it will return the modify string length
console.log(arr1)

// ! 2.pop()

// it is used to remove the last element from the array.

let arr2=[20,80,90]
arr2.pop()
console.log(arr2)

// ! 3.unshift()

// it is used to store element at the starting of array.

let arr3=[70,80,90]
arr3.unshift(60)
console.log(arr3)

// ! 4.shift()

// it is used to remove the element from the starting

let arr4=[50,60,70]
arr4.shift()
console.log(arr4)

// ! 5.includes()

// it is used to know the given element is present or not if it is present it will return true else it will return false

console.log(arr4.includes(60)) //true
console.log(arr4.includes(40)) //false

// ! 6.indexof()

// it is used to know the index of given element
// it will take the first occurance of the given string.

let arr5=[10,30,50,90,30,20]
console.log(arr5.indexOf(90))

// ! 7.lastindexof()

// this method is used to return the last occurance index of the given element.

console.log(arr5.lastIndexOf(30))

// ! 8.conact()

// it is used to combine two or more than two arrays and it will return one new array.

let sub1=["html","css"]
let sub2=["python","java"]
console.log(sub1.concat(sub2))

// ! 9.reverse()

// it is used to reverse the given array

let arr6=[20,30,40,50,80]
console.log(arr6.reverse())

// ! 10.join()

// this method is used to convert any array into string

let arr7=["Html","css","javascript"]
console.log(arr7.join(" "))

// ! reverse the string using only methods

let str="hello"
let srr8=str.split("")
console.log(srr8)

let revarr= srr8.reverse()
console.log(revarr)

let revstr= revarr.join(" ")
console.log(revstr)

console.log(str.split("").reverse().join(""))

// ! 11. slice()
// it is extracting one array from another array

let arr9=[10,0,30,40,480,892,930]
console.log(arr9.slice(2,6))

// !12. splice()

// this method will take 3 parameters (startindex , deleted count , replacementvalue)
//this method modify the original array.

let arr10=[10,89,89,730,67,56,54,73]
arr10.splice(1,4,400)
console.log(arr10)

// ! Higher order array methods


// ! 1. map()

// it is used for traversing array if we want to perform with all the element
let numbers=[80,75,65,82,92]  //op-->[85, 80, 70, 87, 97]

let num=numbers.map((ele)=>{
     return ele + 5
})

console.log(num)

// task

let subject=["Html","css","js","pyhton"]

let upper=subject.map((element)=>{
    return element.toUpperCase()
})
console.log(upper)

// ! 2. filter()

// it will check the condition if condition will become true after that it will return value

let filterarr=numbers.filter((ele)=>{
    return ele>80
})
console.log(filterarr)

// ! 3. reduce()

let arrr=[10,20,30,40,90]

let arrr1=arrr.reduce((acc,ele)=>{
    return acc+ele
})

console.log(arrr1)

// ! 4.sort()

let arr11=[3,2,9,0,8]
let asc=arr11.sort((a,b)=>{
    return a-b //ascending order
})
console.log(asc)

let des=arr11.sort((a,b)=>{
    return b-a
})
console.log(des)