/**
 * Created by Mateusz on 2016-10-26.
 */






$(document).ready(function () {

    $(".webpage-nav-button").hover(function(){
       $(this).toggleClass("underline");
    });

    $( function() {
        $( ".faqContent").accordion();
    } );
});