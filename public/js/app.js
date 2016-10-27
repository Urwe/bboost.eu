



    var app = angular.module('bboost',[]);

    app.controller('contentCtrl', function(){
        this.content = tabArray;
    });

     var tabArray = {
         site:"<home-page-content></home-page-content>",
     };

     app.directive('homePageContent',function(){
         return{
             restrict:'E',
             templateUrl:'html/home.html',
         }
     });
