let fetch_data=fetch("https://fakestoreapi.com/products")
console.log(fetch_data) //promise

fetch_data.then((data)=>{
    console.log(data)  //response


    let json_data=data.json()

    console.log(json_data)    //promise

    json_data.then((data1)=>{
        console.log(data1) //original data

        let ol=document.querySelector("ol")

     data1.map((ele)=>{
        let li=document.createElement("li")
        li.innerText=ele.title
        ol.append(li)

     })

    })

    .catch((error1)=>{
       console.log(error1)
    })

})
.catch((error)=>{
      console.log(error)
})
