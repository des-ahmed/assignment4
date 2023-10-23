angular.module('menuApp')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('categories', {
      url: '/categories',
      templateUrl: 'js/categories/categories.template.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryName}',
      templateUrl: 'js/items/items.template.html',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
                function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryName);
        }]
      }
    });

  $urlRouterProvider.otherwise('/categories');
});
