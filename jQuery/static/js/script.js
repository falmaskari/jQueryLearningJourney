$('#show').click(function(){
    if($("#password").attr("type") == "password"){
        $('#show').text("hide")
        $("#password").attr("type","text")
    }
    else{
        $('#show').text("show")
        $("#password").attr("type","password")
    }
})



let text = $("#text")
let res = $("#res")

text.keyup(function(){
    let count = text.val().length
    console.log(count)
    if(count>=20){
        text.css({"border":"1px solid red", "outline":"1px solid red"});
    }
    else{
        text.css({"border":"1px solid black", "outline":"1px solid black"});
    }
    res.text(count)
}
) 
