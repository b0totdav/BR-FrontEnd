$(function(){
    console.log("betöltött")
    $(".bg-danger").click(function(){
        $(this).hide(1500);
    })
    $(".bg-success").mouseover(function(){
        $(this).fadeOut(1500);
    })
    $(".bg-primary").mouseleave(function(){
        $(this).slideUp(500);
    })
    $(".btn-outline-warning").click(function(){
        $("div").fadeIn(1500);
        
    })
    $(".bg-info").click(function(){
        $(this).animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        })
    })
})

