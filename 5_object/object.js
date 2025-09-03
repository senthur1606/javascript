let student = {
    sid:101,
    sname:'senthur',
    ispalyer:true,
    skills:['python','django','html','css','js','sql','git'],
    work:()=>{
               console.log("eat sleap repeat")
    },
    address:{
        city:"chennai",
        pincode:600021
    }
    
}
console.log(student)

// ! how to access 
console.log(student.sname)

console.log(student.skills)
console.log(student.skills[2])
student.work()
console.log(student.address.city)


let employee ={
    ename:'praksh',
    eid:101,
    sal:35000
}

// ! how to modify

employee.eid=110
console.log(employee)

// ! how to add

employee.phno = 7890897453
console.log(employee)

// ! how to delete

delete employee.eid
console.log(employee)

// ! object methods

// ! 1. object.keys()

// it will return the keys in the form of array

let player={
    pname:"rohit",
    age:38,
    team:"india"
}

let key=Object.keys(player)
console.log(key)

// ! 2. object.values()

// it will return all the values in the form of array

let val=Object.values(player)
console.log(val)

// ! 3. object.entries()

// it will return one nested array where all the key and value pair in the stored in separate array.

let key_values=Object.entries(player)
console.log(key_values)

// ! 4. object.freeze()

let ob1={
    obname:"pen",
    color:"red"
}
console.log(ob1)
Object.freeze(ob1)

ob1.color="blue"  // we can't modify
ob1.price=10      // we can't add
delete ob1.color  // we can't delete
console.log(ob1)

// ! 5. isFrozen()

console.log(Object.isFrozen(ob1))    // true
console.log(Object.isFrozen(player)) // false

