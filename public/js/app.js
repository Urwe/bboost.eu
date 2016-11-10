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


    app.controller('faqCtrl',function(){
        this.questions=faq;
    });

    var faq = [
        {
            content:"How it works?",
            answer:"Quite well"
        },
        {
            content:"How it looks",
            answer:"it looks pretty good"
        },
        {
            content:"How you doing, man?",
            answer:"Oh greate"
        }
    ];
