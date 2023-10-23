(function () {
'use strict';

angular.module('menuApp')
.component('categoriesList', {
  templateUrl: 'js/categories/categories.template.html',
  bindings: {
    items: '<'
  },
  controller: CategoriesController
});

CategoriesController.$inject = [];
function CategoriesController() {
  var $ctrl = this;
  // يمكنك إضافة الوظائف هنا إذا كنت بحاجة إلى القيام بمعالجة محددة للبيانات
}

})();
