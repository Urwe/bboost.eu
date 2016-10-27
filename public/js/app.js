var app = angular.module('bboost',[]);

    app.controller('contentCtrl',function(){
        this.site=currentTab;
    });



    app.controller('scopeCtrl',['$scope', function($scope){
        $scope.activeTab='html/boosting.html';
    }]);


    var currentTab = {
        home:true,
        boosting:false
    };

    function zmiana(){
        currentTab.home=false;
        currentTab.boosting=true;
        console.log(currentTab.home);
    }


     app.directive('homePageContent',function(){
         return{
             restrict:'E',
             templateUrl:'html/home.html'
         }
     });

    app.directive('boostingPageContent', function(){
        return{
            restrict:'E',
            templateUrl:'html/boosting.html'
        }
    });
