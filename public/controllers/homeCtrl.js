/**
 * Created by gastrodia on 14-3-28.
 */

define(['modules/mainApp', 'factories/Pizza'], function (mainApp) {
    mainApp.controller('homeCtrl', ['$scope', 'Pizza', function ($scope, Pizza) {
        var new_pizza = new Pizza({
            author: 'agoodpizayolo',
            color: 'blue',
            size: 999
        });

        new_pizza.$save(function (save_the_pizza) {
            console.log('Success pizza - ', save_the_pizza);
        });

        Pizza.get({id: '50b40dd6ed3f055a27000001'}, function (pizza) {
            pizza.color = 'UV';
            pizza.$save();
        });
    }]);
});
