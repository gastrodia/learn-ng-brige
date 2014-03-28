/**
 * Created by gastrodia on 14-3-28.
 */
define(['modules/mainApp', 'factories/Item'], function (mainApp) {
    mainApp.controller('listCtrl', ['$scope', 'Item', function ($scope, Item) {
        $scope.items = Item.query();
    }]);
});