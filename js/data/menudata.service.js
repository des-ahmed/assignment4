angular.module('data')
.service('MenuDataService', function() {
  var service = this;

  service.getAllCategories = function() {
    return [
      { name: "الأطباق الرئيسية" },
      { name: "المقبلات" },
      { name: "الحلويات" }
    ];
  };

  service.getItemsForCategory = function(categoryName) {
    var items = {
      "الأطباق الرئيسية": [
        { name: "كبسة دجاج" },
        { name: "مندي لحم" }
      ],
      "المقبلات": [
        { name: "تبولة" },
        { name: "حمص" }
      ],
      "الحلويات": [
        { name: "كنافة" },
        { name: "بقلاوة" }
      ]
    };
    return items[categoryName] || [];
  };
});
