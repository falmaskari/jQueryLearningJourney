$('#click').click(function(){
    $('.box').hide(1000)
})

$('#click1').click(()=>{
    $('.box1').show(1000)
})

$('#click2').click(()=>{
    $('.box2').toggle(1000)
})

$('#click3').click(()=>{
    $('.box3').slideToggle(1000)
})

$('#click4').click(()=>{
    $('.top').animate({height:"100px",width:"100%"},4000)
})

$('#stop').click(()=>{
    $('.top').stop()
})

$('#calc').click(()=>{
    let x = $('#x').val()
    let y = $('#y').val()
    $("#res").text(`this result is : ${+x + +y}`)
})

// Retrieve users from JSON Placeholder website
$.ajax({
    url:"https://jsonplaceholder.typicode.com/users",
    method: 'get',
    success: function(res){
        let text = " "
        for(let i = 0; i < res.length; i++){
            text += `<li>${res[i].name}</li>`
        }
        console.log(text)
        $("#list").html(text)
        
    },
    error: function(e){
        console.log(e)
    }
})

// Retrieve user's portfolio picture from github website
$("#click6").click(()=>{
    let username = $("#username").val()
    let urlapi = "https://api.github.com/users/"+username

    $.ajax({
        url:urlapi,
        method: 'get',
        success: function(res){
            //console.log(res)
            //$("#list1").html(res.name)
            $("#img").attr("src",res.avatar_url)
            console.log(res.avatar_url)
        },
        error: function(e){
            console.log(e)
        }
    }) 
})