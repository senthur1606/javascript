function convert(){
    const celsius=Number(document.getElementById("input").value)
    const fehe=(celsius * 9/5) + 32
    const result=document.getElementById("result")
    result.innerHTML =fehe + "°F"
}