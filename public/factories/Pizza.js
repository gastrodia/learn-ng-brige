/**
 * Created by gastrodia on 14-3-28.
 */
define(['modules/mainApp'], function (mainApp) {
    mainApp.factory('Pizza', ['$resource', function ($resource) {
        return $resource('/api/pizzas/:id', {id: '@id'});
    }]);
});