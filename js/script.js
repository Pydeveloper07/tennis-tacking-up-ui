$(document).ready(function(){
    $(window).scroll(function(event){
        
        var scroll = $(window).scrollTop();
        if (scroll > 30){
            $("#navbar").css({backgroundColor: "white"});
            $("#navbar .navbar-brand").css({color: "green"});
            $("#navbar .nav-link:not(#navbar .nav-item.active .nav-link)").css({color: "black"});
        }
        if (scroll < 30){
            $("#navbar").css({backgroundColor: "transparent"});
            $("#navbar .navbar-brand").css({color: "white"});
            $("#navbar .nav-link:not(#navbar .nav-item.active .nav-link)").css({color: "white"});
        }
    })
    
});