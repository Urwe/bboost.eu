/**
 * Created by Mateusz on 2016-10-26.
 */






$(document).ready(function () {

    var logoWidth = $("#side-nav-company-logo").width();
    $("#side-nav-company-logo").css("height",logoWidth);


    $(".webpage-nav-button").hover(function(){
       $(this).toggleClass("underline");
    });

});