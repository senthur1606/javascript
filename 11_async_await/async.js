let getdata= async()=>{
    try{
    let f= await fetch("https://fakestoreapi.com/products")
    console.log(f)

    let data= await f.json()
    console.log(data)
     }

   catch(err)
   {
   console.log(err)
   }
}

getdata()