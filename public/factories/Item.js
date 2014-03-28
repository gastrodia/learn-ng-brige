define(['modules/mainApp'], function (mainApp) {
    mainApp.factory('Item', ['$resource', function ($resource) {
        return $resource('/item/:id', {id: '@id'});
    }]);
});/**
 * Created by gastrodia on 14-3-28.
 */
