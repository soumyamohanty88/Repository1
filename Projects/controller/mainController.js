var app = angular.module('mainApp', ['ngRoute']);

app.controller('loginCtrl', function ($scope) {
    $scope.showHide = function () {
        $scope.isVisible = true;
    };
    $scope.hideShow = function(){
        $scope.isVisible = false;
    }
});

app.controller('hoverCtrl', function($scope){
    $scope.dth_options = [
        {item: 'Airtel Digital TV', image: '../images/airtel.jpg'},
        {item: 'Videocon D2H', image: '../images/videocond2h.png'},
        {item: 'Dish TV', image: '../images/dishtv.jpg'},
        {item: 'Reliance Digital TV', image: '../images/reliance.jpg'},
        {item: 'Sun Direct', image: '../images/sundirect.jpg'},
        {item: 'Tata Sky', image: '../images/tatasky.jpg'}
    ];
    
    $scope.hovered_dth = function(option){
        $scope.dth = option.item;
        $scope.imgurl = option.image;
    };
    
    $scope.clear_dth = function(){
        $scope.dth = "";
    };
});

app.controller('billpaymentCtrl', function($scope){
    $scope.bills = [
        {billName: 'Electricity', billImage: '../images/bulb.jpg'},
        {billName: 'LPG', billImage: '../images/cylinder.jpg'},
        {billName: 'Water', billImage: '../images/water_droplet.png'}
    ];
    
    
});

app.controller('metro_ctrl', function($scope){
    $scope.railways = [
        {railwayName: 'Delhi Metro', railImg: '../images/delhi.jpg'},
        {railwayName: 'Mumbai Local', railImg: '../images/mumbai.jpg'}
    ];
});
/*
app.controller('mobilectrl', function($scope){
    $scope.message= 'Enter your mobile number';
});

app.controller('dthctrl', function($scope){
    $scope.message= 'Pay your DTH bill. Which operator?';
});

app.controller('datacardctrl', function($scope){
    $scope.message= 'Enter your datacard number';
});

app.controller('billpaymentctrl', function($scope){
    $scope.message= 'Choose a product';
});

app.controller('metroctrl', function($scope){
    $scope.message= 'Which Operator?';
});

*/
/*defining routing for app
URI /mobile -> template mobile.html and controller mobilectrl
URI /dth -> template dth.html and controller dthctrl
URI /datacard -> template datacard.html and controller datacardctrl
URI /billpayment -> template billpayment.html and controller billpaymentctrl
URI /metro -> template metro.html and controller metroctrl
*/
/*
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: '../templates/mobile.html',
        controller: 'mobilectrl'
    })
    .when('/dth',{
        templateUrl: '../templates/dth.html',
        controller: 'dthctrl',
        activetab: 'dth'
    })
    .when('/datacard',{
        templateUrl: '../templates/datacard.html',
        controller: 'datacardctrl',
        activetab: 'datacard'
    })
    .when('/billpayment',{
        templateUrl: '../templates/billpayment.html',
        controller: 'billpaymentctrl',
        activetab: 'billpayment'
    })
    .when('/metro',{
        templateUrl: '../templates/metro.html',
        controller: 'metroctrl',
        activetab: 'metro'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);*/
