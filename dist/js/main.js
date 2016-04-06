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
(function(window, angular) {

	angular.module('mytodo')
		.config(TodoConfiguration);

	TodoConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function TodoConfiguration($stateProvider, $urlRouterProvider) {
		// Para cualquier URL incorrecta
		$urlRouterProvider.otherwise("/");

		// Definimos los estados (y la ruta que tendra cada uno)
		$stateProvider
            .state('list', {
                url: "/",
                params: {
                    todoObj: null
                },
                templateUrl: "/app/task.view.list.html",
                controller: 'listController'
            })
            .state('edit', {
                url: "/edit/:id",
                params: {
                    todoObj: null
                },
                templateUrl: "/app/task.view.edit.html",
                controller: 'taskController'
            });
	}

})(window, window.angular);