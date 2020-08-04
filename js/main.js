'use strict'

$(document).ready(function(){
    
    $(window).scroll(function(){
        let bg = $("#bg");
        let moon = $("#moon");
        let mountain = $("#mountain");
        let road = $("#road");
        let text = $("#text");
        var value = window.scrollY;
        bg.css("top", value * 0.5 + "px");
        moon.css("left", -value * 0.5 + "px");
        mountain.css("top",-value * 0.15 + "px");
        road.css("top",value * 0.15 + "px");
        text.css("top",value * 1 + "px" );
		if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
            if($(this).scrollTop() > 50){
                $("header").css({
                    "background":"gray",
                    "transition":"0.5s",
                    "opacity":"0.8"
            })
            
		} 
    }else{
        $('.ir-arriba').slideUp(300);
        $("header").css({
            "background":"",
            "transition": "0.5s",
            "opacity": "1"
        })
    }
});
    
    $('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 800);
	});
    
    $("#boton").on('click',function(){
        alert('se ha cargado correctamente jquery');
    });

    $("#scroll").on('click',function(){
        $('html, body').animate({
            scrollTop: 1350
          }),800
    });

    $("#form").submit(function(e){
        e.preventDefault();
        let nombre = e.target[0].value;
        let email = e.target[1].value;
        let comentario = e.target[2].value;
        let aside = $("#aside");
        let mensaje = "<p>El usuario "+nombre+" con email "+email+" ha escrito :"+comentario+"</p>";
        aside.append(mensaje); 
        console.log(aside);
    });

    var selectedClass = "";
$(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    
 });