// ======Task1 Section Start=====
$('.img2').click(()=>{
    $('.img1').attr('src',$('.img2').attr('src')) 
})

$('.img3').click(()=>{
    $('.img1').attr('src',$('.img3').attr('src')) 
})

$('.img4').click(()=>{
    $('.img1').attr('src',$('.img4').attr('src')) 
})
// ======Task1 Section End=====


// ======Task2 Section Start=====

// Next button section start
$('.next').click(function(){
    let currentImg = $('.show')
    let nextImg = currentImg.next()
    
    if(nextImg.length){
        currentImg.removeClass("show")
        nextImg.addClass("show")
    }
})
// Next button section end


// Previous button section start
$('.prev').click(function(){
    let currentImg = $('.show')
    let prevImg = currentImg.prev()
    
    if(prevImg.length){
        currentImg.removeClass("show")
        prevImg.addClass("show")
    }
})
// Previous button section end

// ======Task2 Section End=====


// ======Task3 Section Start=====
setInterval(()=>{
    let currentImg = $('.show-1')
    let prevImg = currentImg.next()
    
        if(prevImg.length){
            currentImg.removeClass("show-1")
            prevImg.addClass("show-1")
        }
},1000)

// ======Task3 Section End=====
