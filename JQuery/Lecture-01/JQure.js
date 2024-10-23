// use With tags
$(document).ready(function () {
    $(".H-Btn").click(()=>{
        $('h1').hide()
    })
})

// use With '*'
$(document).ready(function () {
    $(".hideAll").click(()=>{
        $('*').hide()
    })
})


// use With class 
$(function () {
    $(".btn").click(()=>{
        $('.p-text').hide()
    })
})

// use With ID 
$(function () {
    $("#Btn").click(()=>{
        $('#p').hide()
        $('#Btn').hide()
    })
})

