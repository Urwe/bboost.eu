var app = angular.module('bboost',[]);


    app.controller('teamplatesCtrl', ['$scope', function($scope) {
         $scope.templates =
            [
                { name: 'home.html', url:'html/home.html'},
                { name: 'boosting.html', url:'html/boosting.html'},
                { name: 'guides.html', url:'html/guides.html'},
                { name: 'news.html', url:'html/news.html'},
                { name: 'faq.html', url:'html/faq.html'},
                { name: 'rules.html', url:'html/rules.html'},
                { name: 'contact.html', url:'html/contact.html'}
                ];
        $scope.template = $scope.templates[0];
        }]);


    app.controller('faqCtrl',function($scope){

            $scope.selectedIndex = null;
            $scope.select = function(index) {
                $scope.selectedIndex = index;
            };
        this.questions=faq;
    });

    var faq = [
        {
            content:"Why should i choose You?",
            answer:"We are a real, trusted and registered company in Europe which means our business is completly legal. We provide the best quality of boosting with the lowest prices you can find while your account is VPN protected.",
            type:"general"

        },
        {
            content:"Will my account be safe and won't get stolen?",
            answer:"There is no possibility to steal League of Legends account if you have confirmed your email address. Thats why you need to do that before buying any service at bboost.eu.",
            type:"general"
        },
        {
            content:"Will booster chat with my friends?",
            answer:"No, they won’t reply back to anyone whispering to them.",
            type:"boosting"
        },
        {
            content:"Could i chat with my booster?",
            answer:"Yes, you can ask for your booster Skype name and chat with him while he is playing.",
            type:"boosting"
        },
        {
            content:"Can i play on my account during boost?",
            answer:"Playing ranked games until boost is done is against our rules and can cause penalties that would make your boost shorter. You can play normal games between boosting sessions, however you need to ask your booster beforehand. ",
            type:"boosting"
        },
        {
            content:"Will booster spend my RP or IP?",
            answer:"Booster won’t do that without your permission. He can ask you if he can spend your IP if needed, while spending RP is possible only if it would be your desire to give booster such competence.",
            type:"boosting"
        },
        {
            content:"Will booster change my runes or masteries",
            answer:"Yes booster can do that in order to provide best performance during elo boosting.",
            type:"boosting"
        },
        {
            content:"What payment methods are available?",
            answer:"We accept Paypal, Paysafecard(+25%) and Bank transfer.",
            type:"payment"
        },
        {
            content:"I have my payment done, what now??",
            answer:"We need you to give us necessary informations like account login details in case of standard boost or Skype contact in case of DuoQ order, so We can start Your order.",
            type:"payment"
        }
    ];

    //region boost-directives

app.directive('divisionBoosting',function(){
   return{
       restrict:'E',
       templateUrl:'html/boost-pages/division-boosting.html'
   };
});
app.directive('duoqBoosting',function(){
    return{
        restrict:'E',
        templateUrl:'html/boost-pages/duoq-boosting.html'
    }
});
app.directive('perWinBoosting',function (){
    return{
        restrict:'E',
        templateUrl:'html/boost-pages/per-win-boosting.html'
    };
});
app.directive('placementBoosting',function (){
    return{
        restrict:'E',
        templateUrl:'html/boost-pages/placement-boosting.html'
    };
});


app.controller('boostCtrl',function($scope){

    $scope.tab = 'division';
    $scope.changeTab = function(activeTab) {
        $scope.tab = activeTab;
    };
});
//endregion



    app.controller('divisionBoostCtrl',function($scope){
        $scope.leagues = leagues;
        $scope.divisions = divisions;
        $scope.points = points;

        $scope.currentLeague = $scope.leagues[3];
        $scope.currentDivision =$scope.divisions[4];
        $scope.desireLeague = $scope.leagues[3];
        $scope.desireDivision = $scope.divisions[4];

        $scope.divPoints = $scope.points[0];

        $scope.price = "Choose your boost";

        $scope.sLigImg = "silver_5";
        $scope.eLigImg = "silver_5";

        $scope.calculatePrice = function(){
            if($scope.currentLeague.value > $scope.desireLeague.value){
                $scope.price = "Choose your boost";
                $scope.sLigImg = $scope.currentLeague.img+$scope.currentDivision.img;
                $scope.eLigImg = $scope.desireLeague.img+$scope.desireDivision.img;
            }
            else if ($scope.currentLeague.value == $scope.desireLeague.value && $scope.currentDivision.value >= $scope.desireDivision.value){
                $scope.price = "Choose your boost";
                $scope.sLigImg = $scope.currentLeague.img+$scope.currentDivision.img;
                $scope.eLigImg = $scope.desireLeague.img+$scope.desireDivision.img;
            }
            else{
                var sLig = $scope.currentLeague.value;
                var sDiv = $scope.currentDivision.value;
                var eLig = $scope.desireLeague.value;
                var eDiv = $scope.desireDivision.value;

                var cena = 0;
                var multiplier = $scope.divPoints.multiplier;

                $scope.sLigImg = $scope.currentLeague.img+$scope.currentDivision.img;
                $scope.eLigImg = $scope.desireLeague.img+$scope.desireDivision.img;

                while(sLig != eLig || sDiv != eDiv){
                    cena += rates[sLig][sDiv]*multiplier;
                    cena = (Math.round(cena*100))/100;
                    multiplier=1;
                    if (sDiv == 4){
                        sDiv = 0;
                        sLig ++;
                    }
                    else if (sDiv < 4){
                        sDiv++
                    }
                    else{
                        console.log("error line 155 app.js");
                    }
                }
                $scope.price = cena;
            }
        };
    });

    app.controller('duoqBoostCtrl',function($scope){
    $scope.leagues = leagues;
    $scope.divisions = divisions;
    $scope.points = points;

    $scope.currentLeague = $scope.leagues[3];
    $scope.currentDivision =$scope.divisions[4];
    $scope.desireLeague = $scope.leagues[3];
    $scope.desireDivision = $scope.divisions[4];

    $scope.divPoints = $scope.points[0];

    $scope.price = "Choose your boost";

    $scope.sLigImg = "silver_5";
    $scope.eLigImg = "silver_5";

    $scope.calculatePrice = function(){
        if($scope.currentLeague.value > $scope.desireLeague.value){
            $scope.price = "Choose your boost";
            $scope.sLigImg = $scope.currentLeague.img+$scope.currentDivision.img;
            $scope.eLigImg = $scope.desireLeague.img+$scope.desireDivision.img;
        }
        else if ($scope.currentLeague.value == $scope.desireLeague.value && $scope.currentDivision.value >= $scope.desireDivision.value){
            $scope.price = "Choose your boost";
            $scope.sLigImg = $scope.currentLeague.img+$scope.currentDivision.img;
            $scope.eLigImg = $scope.desireLeague.img+$scope.desireDivision.img;
        }
        else{
            var sLig = $scope.currentLeague.value;
            var sDiv = $scope.currentDivision.value;
            var eLig = $scope.desireLeague.value;
            var eDiv = $scope.desireDivision.value;

            var cena = 0;
            var multiplier = $scope.divPoints.multiplier;

            $scope.sLigImg = $scope.currentLeague.img+$scope.currentDivision.img;
            $scope.eLigImg = $scope.desireLeague.img+$scope.desireDivision.img;

            while(sLig != eLig || sDiv != eDiv){
                cena += rates[sLig][sDiv]*multiplier;
                multiplier=1;
                if (sDiv == 4){
                    sDiv = 0;
                    sLig ++;
                }
                else if (sDiv < 4){
                    sDiv++
                }
                else{
                    console.log("error line 155 app.js");
                }
            }
            cena = cena * 1.5;
            cena = (Math.round(cena*100))/100;
            $scope.price = cena;

        }
    };
});

    app.controller("placementBoostCtrl", function($scope) {
    $scope.sliderConfig = {
        min: 2,
        max: 10,
        step: 1
    };

        $scope.leagues = placementLeagues;

        $scope.sLigImg = "gold";

        $scope.sLig=$scope.leagues[3];

        $scope.price = "Choose your boost";

    $scope.wins = 2;

    $scope.$watch('wins',function(){
        $scope.price = $scope.wins*$scope.sLig.gamePrice;
    });

    $scope.setPrice = function(wins) {
        $scope.wins = wins;
    };
    
    $scope.calculatePrice = function () {
        $scope.price = $scope.wins*$scope.sLig.gamePrice;
        $scope.sLigImg = $scope.sLig.img;
    };



});

    app.controller('perWinCtrl', function($scope){

        $scope.sliderConfig = {
            min: 2,
            max: 10,
            step: 1
        };

        $scope.leagues = leagues;
        $scope.divisions = divisions;


        $scope.currentLeague = $scope.leagues[3];
        $scope.currentDivision =$scope.divisions[4];

        $scope.sLigImg = "silver";

        $scope.price = "Choose your boost";

        $scope.wins = 2;

        $scope.$watch('wins',function(){
            $scope.price = (Math.round(($scope.wins*perWinRates[$scope.currentLeague.value][$scope.currentDivision.value])*100))/100;
        });

        $scope.setPrice = function(wins) {
            $scope.wins = wins;
        };

        $scope.calculatePrice = function () {
            $scope.price = (Math.round(($scope.wins*perWinRates[$scope.currentLeague.value][$scope.currentDivision.value])*100))/100;

            $scope.sLigImg = $scope.currentLeague.img;
        };

    });

    app.directive("slider", function() {
    return {
        restrict: 'A',
        scope: {
            config: "=config",
            price: "=model"
        },
        link: function(scope, elem, attrs) {
            var setModel = function(value) {
                scope.model = value;
            }

            $(elem).slider({
                range: false,
                min: scope.config.min,
                max: scope.config.max,
                step: scope.config.step,
                slide: function(event, ui) {
                    scope.$apply(function() {
                        scope.price = ui.value;
                    });
                }
            });
        }
    }
});


    var leagues = [
        {
            league:'Diamond',
            value:4,
            img:'diamond'
        },
        {
            league:'Platinum',
            value:3,
            img:'platinum'
        },
        {
            league:'Gold',
            value:2,
            img:'gold'
        },
        {
            league:'Silver',
            value:1,
            img:'silver'
        },
        {
            league:'Bronze',
            value:0,
            img:'bronze'
        }
    ];

    var divisions = [
        {
            division:'Division I',
            value:4,
            img:'_1'
        },
        {
            division:'Division II',
            value:3,
            img:'_2'
        },
        {
            division:'Division III',
            value:2,
            img:'_3'
        },
        {
            division:'Division IV',
            value:1,
            img:'_4'
        },
        {
            division:'Division V',
            value:0,
            img:'_5'
        }
    ];

    var rates = [
        [11,11,11,11,13],
        [15,15,15,15,18],
        [22,22,24,24,26],
        [32,34,36,39,48],
        [59,74,89,119,200]
    ];

    var points = [
        {
            points:"0-20",
            multiplier:1
        },
        {
            points:"21-40",
            multiplier:0.875
        },
        {
            points:"41-60",
            multiplier:0.75
        },
        {
            points:"61-80",
            multiplier:0.625
        },
        {
            points:"81-100",
            multiplier:0.5
        }
    ];

    var placementLeagues = [
        {
            league:'Unranked',
            img:'unranked',
            gamePrice:3.5
        },
        {
            league:'Bronze',
            img:'bronze',
            gamePrice:3
        },
        {
            league:'Silver',
            img:'silver',
            gamePrice:3
        },
        {
            league:'Gold',
            img:'gold',
            gamePrice:3.5
        },
        {
            league:'Platinum',
            img:'platinum',
            gamePrice:4.5
        },
        {
            league:'Diamond',
            img:'diamond',
            gamePrice:5.5
        }
    ];

    var perWinRates = [
        [1.75,1.75,1.75,1.75,1.9],
        [2.3,2.3,2.3,2.3,2.5],
        [3.25,3.25,2.3,3.4,3.5],
        [4.75,5.25,5.75,6.25,6.5],
        [9,12,14,19,26]
    ];







