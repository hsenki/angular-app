(function(){

    var app = angular.module('mytodo', ['ui.router']);


    var task=[
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

    
    app.controller('listController', function ($scope) {
        this.todo = task;


    });

    app.controller('taskController', function ($scope) {
        this.todo = task;


    });

})();