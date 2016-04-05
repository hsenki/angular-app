var mytodo = angular.module('mytodo', []);

mytodo.controller('listController', function ($scope) {
    $scope.todoList = [
        {
            id: 1,
            title: 'Compras',
            description: 'Hacer las Compras del mes',
            done: true
        },
        {
            id: 2,
            title: 'Mueble Habitacion',
            description: 'Terminar con el mueble de la habitacion',
            done: false
        },
        {
            id: 3,
            title: 'Tarea Angular',
            description: 'Terminar la Tarea de Angular',
            done: false
        }
    ];


});