$(document).ready(function(){

    var contents = $(".contents");
    var about_myself = $("#about_myself");
    var wtf = $("#wtf");
    var wtf2 = $("#wtf2");
    var delay = 300;
    var timer = null;

    contents.toggle();
    contents.children().hide();
    contents.children("#about_myself").toggle();

    $("#menu_box").click(function(){$("#menu_panel").slideToggle(200);});
    $("#menu_button1").css("font-weight", "bold");
    
    function a(){

        if(innerWidth <= 799){                  /*스마트폰*/

            $("#menu_button1").click(function(){
                $(".menu_button").css("font-weight", "normal");
                $("#menu_button1").css("font-weight", "bold");
                contents.children().hide();
                contents.children('#about_myself').show();
                $("#menu_panel").slideToggle(200);
            });

            $("#menu_button2").click(function(){                 
                $(".menu_button").css("font-weight", "normal");
                $("#menu_button2").css("font-weight", "bold");
                contents.children().hide();
                contents.children('#wtf').show();
                $("#menu_panel").slideToggle(200);
            });

            $("#menu_button3").click(function(){
                $(".menu_button").css("font-weight", "normal");
                $("#menu_button3").css("font-weight", "bold");
                contents.children().hide();
                contents.children('#wtf2').show();
                $("#menu_panel").slideToggle(200);
            });
        }
        else{                  /*컴퓨터*/
            
            $("#menu_button1").unbind("click");
            $("#menu_button2").unbind("click");
            $("#menu_button3").unbind("click");

            $("#menu_panel").show();
            
            $("#menu_button1").click(function(){
                $(".menu_button").css("font-weight", "normal");
                $("#menu_button1").css("font-weight", "bold");
                contents.children().hide();
                contents.children('#about_myself').show();
                $("#menu_panel").show();
            });

            $("#menu_button2").click(function(){                
                $(".menu_button").css("font-weight", "normal");
                $("#menu_button2").css("font-weight", "bold");
                contents.children().hide();
                contents.children('#wtf').show();
                $("#menu_panel").show();
            });

            $("#menu_button3").click(function(){
                $(".menu_button").css("font-weight", "normal");
                $("#menu_button3").css("font-weight", "bold");
                contents.children().hide();
                contents.children('#wtf2').show();
                $("#menu_panel").show();
            });
        }
    }

    a();
    
    $(window).on('resize', function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            console.log('resize event!');
            a();
        }, delay);
    });
});