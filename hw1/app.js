(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.food = "";
  $scope.stateOfLunch = "";
  $scope.colorLunch = "black";

  $scope.checkLunch = function () {
    var amountFood = calculateHowManyFood($scope.food);

    if (amountFood == 0){
      $scope.stateOfLunch = "Please enter data first";
      $scope.colorLunch = "danger";
    }
    else if (amountFood <= 3){
      $scope.stateOfLunch = "Enjoy!";
      $scope.colorLunch = "success";
    }
    else {
      $scope.stateOfLunch = "Too much!";
      $scope.colorLunch = "success";
    }
  };

  function calculateHowManyFood(stringToSplit){
    var parsedArray = removeEmpty(stringToSplit.split(",").map(
      e => { return trimString(e); }
    ));
    return parsedArray.length;
  }

  function removeEmpty(array){
    var cleanArray = [];
    var x;
    for (x in array) {
      if (array[x] != "") {
        cleanArray.push(array[x]);
      }
    }
    return cleanArray;
  }

  function trimString(stringToTrim){
    return stringToTrim.replace(/^\s+|\s+$/g, '');
  }
}

})();
