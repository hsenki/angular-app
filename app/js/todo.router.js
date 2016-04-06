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