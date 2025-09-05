// json--> javascript object notation is a lightweight data-interchange format
// that is easy for humans to read and write,and easy for machine to parse and generate.

// ! adv of json

// ? Human-reasable:
// json's structure is easy for developers to understand and write.

// ? lightweight:
//  json is a minimal format that reduce the size of the data being transmitted.

// ? language-independent:
// json can be used with many programming languages,
// including javascript,python,Ruby,java, etc..

let person={
    pname:'muthu',
    page:24,
    city:'tenkasi',
    isplayer:true
}

console.log(person)

// ! json.stringify()

// this method is used to convert any javascript object into json

let jsondata=JSON.stringify(person)
console.log(jsondata)
console.log(typeof(jsondata))

// ! json.parse()

// this is used to convert any json into javascript object 

let b1=JSON.parse(jsondata)
console.log(b1)
console.log(typeof(b1))

let emp=[
    {
        id:101,
        name:"senthur",
        sal:10000
    },
    {
        id:102,
        name:"prakash",
        sal:12000
    },
    {
        id:103,
        name:"rama",
        sal:20000
    }

]

emp.map((ele)=>{
    console.log(ele.name)
    // console.log(ele.id)
    // console.log(ele.sal)
})

let std=
    {
        sname:'rahul',
        age:21,
        isstudent:true,
        skills:['html','css','js']
    }

console.log(std.sname)

let {sname,age,isstudent,skills} = std
console.log(age)

// ! rest parameter

let display=(a,b,...c)=>{
    console.log(a)
    console.log(b)
    console.log(c)

}

display(10,20,30,40,50)

// ! spread operator

let arr1=[10,20,30]
let arr2=[40,50,60]
let arr3=[...arr1,...arr2]
console.log(arr3)

let num=[1,2,3,4,5,6,7,8,9,10]

let [a,b,...c]= num
console.log(a,b,c)