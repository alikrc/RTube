'use strict';

var baseModule = angular.module('base', ['ngMaterial']);
baseModule.controller('baseCtrl', ['$scope', '$mdSidenav', '$log', '$mdBottomSheet', function ($scope, $mdSidenav, $log, $mdBottomSheet) {

    //$scope.toggleCategoriesList;

    //var sideNavCategoryListId = 'sideNavCategoryList';
    //$mdSidenav(sideNavCategoryListId).then(function (instance) {
    //    $log.debug(sideNavCategoryListId + "is now ready");

    //    $scope.toggleCategoriesList = function () {
    //        $mdSidenav(sideNavCategoryListId).toggle();
    //    }();
    //});

    $scope.showListBottomSheet = function ($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            template:
                '<md-bottom-sheet class="md-list md-has-header"> ' +
                    '<md-subheader>Settings</md-subheader>' +
                    '<md-list>' +
                    '   <md-item ng-repeat="item in items">' +
                    '   <md-item-content  flex class="inset">' +
                    //'        <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)">' +
                    //'            <span class="md-inline-list-icon-label">{{ item.name }}</span>'+
                    //'        </a> ' +
                    '     <md-button aria-label="{{item.name}}" ng-click="listItemClick($index)">' +
                    '         <span>{{item.name}}</span>' +
                    '     </md-button>' +
                    '   </md-item-content>'+
                    '</md-item> </md-list></md-bottom-sheet>',
            controller: 'listBottomSheetCtrl',
            targetEvent: $event
        }).then(function (clickedItem) {
            //$scope.alert = clickedItem.name + ' clicked!';
        });
    };
 
}]);


baseModule.controller('listBottomSheetCtrl', ['$scope', '$mdBottomSheet', function ($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Share', icon: 'share' },
      { name: 'Upload', icon: 'upload' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Print this page', icon: 'print' },
    ];

    $scope.listItemClick = function ($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}]);



var app = angular.module('RTubeApp', ['ngMaterial', 'ngRoute', 'base', 'utilsModule']);

app.config(['$routeProvider', '$mdThemingProvider', '$mdIconProvider', function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
    //$mdIconProvider
    //.defaultIconSet("/assets/svg/avatars.svg", 128)
    //.icon("menu", "/assets/svg/menu.svg", 24)
    //.icon("share", "/assets/svg/share.svg", 24)
    //.icon("google_plus", "/assets/svg/google_plus.svg", 512)
    //.icon("hangouts", "/assets/svg/hangouts.svg", 512)
    //.icon("twitter", "/assets/svg/twitter.svg", 512)
    //.icon("phone", "/assets/svg/phone.svg", 512);

    //$mdThemingProvider.theme('default')
    //    .primaryPalette('brown')
    //    .accentPalette('red');


    $routeProvider.when('/browse', { templateUrl: '/app/views/list.html', controller: 'listCtrl' });
    $routeProvider.when('/browse/:category', { templateUrl: '/app/views/list.html', controller: 'listCtrl' });
    $routeProvider.when('/search/:query', { templateUrl: '/app/views/list.html', controller: 'listCtrl' });
    $routeProvider.when('/view/:id', { templateUrl: '/app/views/view.html', controller: 'viewCtrl' });
    $routeProvider.when('/view/:id/:starttime', { templateUrl: '/app/views/view.html', controller: 'viewCtrl' });
    $routeProvider.when('/playlist/:id', { templateUrl: '/app/views/view.html', controller: 'viewCtrl' });
    $routeProvider.when('/playlist/:id/:start', { templateUrl: '/app/views/view.html', controller: 'viewCtrl' });
    $routeProvider.when('/user/:username', { templateUrl: '/app/views/list.html', controller: 'listCtrl' });
    $routeProvider.when('/user/:username/:feed', { templateUrl: '/app/views/list.html', controller: 'listCtrl' });
    $routeProvider.otherwise({ redirectTo: '/browse' });

}]);

