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

        this.leagues = leagues;
        this.divisions = divisions;


        $scope.price= function(){
            console.log('dasd');
        };
    });

    var leagues = [
        {
            league:'Diamond',
            value:4
        },
        {
            league:'Platinum',
            value:3
        },
        {
            league:'Gold',
            value:2
        },
        {
            league:'Silver',
            value:1
        },
        {
            league:'Bronze',
            value:0
        }
    ];

    var divisions = [
        {
            division:'Division I',
            value:4
        },
        {
            division:'Division II',
            value:3
        },
        {
            division:'Division III',
            value:2
        },
        {
            division:'Division IV',
            value:1
        },
        {
            division:'Division V',
            value:0
        }
    ];

    var prices = [
        [0,11,11,11,11],
        [13,15,15,15,15],
        [18,22,22,24,24],
        [26,32,34,36,39],
        [48,59,74,89,119]
    ];



