//! how to declare string

let str1='i am first string'
console.log(str1)
console.log(typeof str1)

let str2="i'm second string"
console.log(str2)
console.log(typeof str2)

let str3=`i am third string`
console.log(str3)
console.log(typeof str3)

// ! how to know the length of the string

console.log(str1.length)

// ! methods of string

// ! 1. toUppercase()

// this method is used to convert any string into uppercase and it will return one new string.

// it will not modify the original string.

let sname="karthi"
console.log(sname.toUpperCase())
console.log(sname)


// ! 2. toLowercase()

//this method is used to convert any string into lowercase and it will return one new string.

//it will not modify the original string.

let city ="CHENNAI"
console.log(city.toLocaleLowerCase())
console.log(city)


// ! 3. trim()

// it is use to remove the whitespaces from both the sides of the string and it will return one new string.

let str4="  hello  "
console.log(str4.trim())

// ! 4. indexof()

// it is used to know the index of given string
// it will take the first occurance of the given string.

let msg="good morning"
console.log(msg.indexOf("o"))

//! 5. lastIndexOf()

// this method is used to return the last occurance index of the given string.
console.log(msg.lastIndexOf("o"))

// ! 6. includes()

// it is used to know the given string is present or not if it is present it will return true else it will return false

 console.log(msg.includes("o")) //true
 console.log(msg.includes("Good"))//false
 
//  ! 7. charAt()

// it is used to know the character present in the given index.

console.log(msg.charAt(9))

// ! 8. concat()

// it is used to combine two or more than two strings and it will return one new string.

let msg1="hello"
let msg2="everyone"
console.log(msg1.concat(" ",msg2,"..?"))

let combine = msg1.concat(" ",msg2,"..?")
console.log(combine)

// ! 9. replace()

let msg3="Bangalore"
let replaceMsg=msg3.replace("a","$")
console.log(replaceMsg)

// ! 10. replaceall()

let allreplaceMsg = msg3.replaceAll("a","$")
console.log(allreplaceMsg)

let change="i am Bangalore,i love Bangalore"
console.log(change.replaceAll("Bangalore","Chennai"))






