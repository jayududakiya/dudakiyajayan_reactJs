/* jQuery Show And Hide Element */

//show(speed , callback)
//hide(speed , callback)

// $(function(){
//   $("#demo1").click(function(){
//     $(".element").show(2000 , function(){
//       alert('Click For Show Element')
//     })
//   })
// })  

// $(function(){
//   $("#demo2").click(function(){
//     $(".element").hide()
//   })
// })

// $(function(){
//   $("#demo3").click(function(){
//     $(".element").toggle()
//   })
// })

/* FadeEffect In jQuery */

// fadeIn
// fadeOut
// fadeToggle
// fadeTo

// fadeIn


$(function(){
  $("#demo1").click(function(){
    $(".box-1").fadeIn()
    $(".box-2").fadeIn("slow")
    $(".box-3").fadeIn(8000)
    $(".box-4").fadeIn(5000)
    $(".box-5").fadeIn(2000)
  })
})

$(function(){
  $("#demo2").click(function(){
    $(".box-1").fadeOut()
    $(".box-2").fadeOut("slow")
    $(".box-3").fadeOut(2000)
    $(".box-4").fadeOut(5000)
    $(".box-5").fadeOut(8000)
  })
})


$(function(){
  $("#demo3").click(function(){
    $(".box-1").fadeToggle()
    $(".box-2").fadeToggle("slow")
    $(".box-3").fadeToggle(2000)
    $(".box-4").fadeToggle(5000)
    $(".box-5").fadeToggle(8000)
  })
})


$(function(){
  $("#demo4").click(function(){
    $(".box-1").fadeTo(1000 , 0.2)
    $(".box-2").fadeTo("slow" , 0.4)
    $(".box-3").fadeTo(2000 , 0.6)
    $(".box-4").fadeTo(5000 , 0.8)
    $(".box-5").fadeTo(8000 , 1)
  })
})


/* jQuery Slide Effect */

// slideDown
// slideUp
// slideToggle

// $(function(){
//   $('.flip').click(function(){
//     $('.slide').slideDown()
//   })
// })



// $(function(){
//   $('.flip').click(function(){
//     $('.slide').slideUp()
//   })
// })

// $(function(){
//   $('.flip').click(function(){
//     $('.slide').slideToggle(2000)
//   })
// })