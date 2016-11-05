var app = angular.module('myModule');

app.controller('ctrlOne', function($scope){
  $scope.palindrome = function(word){ //parameter can be named anything we want, but it makes sense to make it the same as the ng-model.
    console.log(word);
    var originalWord = word;
    var reverseWord = word.split('').reverse().join('');
    if (originalWord === reverseWord) {
      $scope.result = "Yes!";
    } else {
      $scope.result = "Nope.";
    };
  };
});
