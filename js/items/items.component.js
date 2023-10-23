(function () {
'use strict';

angular.module('menuApp')
.component('itemsList', {
  templateUrl: 'js/items/items.template.html',
  bindings: {
    items: '<'
  },
  controller: ItemsController
});

ItemsController.$inject = [];
function ItemsController() {
  var $ctrl = this;
  // يمكنك إضافة الوظائف هنا إذا كنت بحاجة إلى القيام بمعالجة محددة للبيانات
}

})();
