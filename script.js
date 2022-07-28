$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 800) {
            $('.brand').css('color', '#000');
            $('.nav-link').css('color', '#000');

        } else {
            $('.brand').css('color', '#fff');
            $('.nav-link').css('color', '#fff');
        }
    });
});