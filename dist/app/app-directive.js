UIASSIGN1.directive('convertNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, el, attr, ctrl) {
      ctrl.$parsers.push(function(value) {
        return parseInt(value, 10);
      });

      ctrl.$formatters.push(function(value) {
        return value.toString();
      });
    }
  }
}).directive('check', check);
 function check ( ) {

        var directive = {
            link: link,
            restrict: 'AE',
            scope:true
        };
        return directive;
   function link(scope, element, attrs) {
element.on("click", function () {scope.$apply(attrs["check"]);
});
        }
    }
