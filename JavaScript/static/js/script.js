document.getElementById("show").onclick = function(){
    if(document.getElementById("password").type == "password"){
        document.getElementById("password").type = "text"
    }
    else{
        document.getElementById("password").type = "password"  
    }
}



let text = document.getElementById("text")
let res = document.getElementById("res")

text.onkeyup = function(){
    let count = text.value.length
    //console.log(count)
    if(count>=20){
        text.style.cssText = "border:1px solid red; outline:1px solid red"
    }
    else{
        text.style.cssText = "border:1px solid black; outline:1px solid black"
    }
    res.innerText = count
}
