


UIASSIGN1.controller('mainCTRL', function($scope , $rootScope , $http ) {
			// #dummy controller
      $rootScope.sectorName = 'Home';

      $rootScope.$RequestServ = $http.get("api/survey/users.json")
      .then(function(response) {
          $scope.totalusers = response.data;
      });

});




UIASSIGN1.controller('surveyCTRL', function($scope , $rootScope , $http  ) {
			// #dummy controller
      $rootScope.sectorName = 'Manage survey';
      $scope.surveyIO = {
        surveyTitle : "",
      };

      $rootScope.$RequestServ = $http.get("api/survey/survey.json")
      .then(function(response) {
          $scope.totalSurvey = response.data;
      });


      // add survey
      $scope.addSurvey = function(surveyForm) {
          if (surveyForm.surveyTitle){

            var newSurvey =     {
                  "_id"         : Math.floor((Math.random() * 100) + 5),
                  "name"        : $scope.surveyIO.surveyTitle,
                  "percent"     : Math.floor((Math.random() * 100) + 1),
                  "questions"   : Math.floor((Math.random() * 20) + 1),
                  "quest"       : []
                };
            $scope.totalSurvey.unshift(newSurvey);
            // reset form
            $scope.surveyIO = {};
          }
      };

      $scope.removeSurvey = function (surveyID){
        $scope.totalSurvey.splice(surveyID, 1);
      }

});


UIASSIGN1.controller('questionsCTRL', function($scope , $rootScope , $state, $stateParams , $http ) {
			// #dummy controller
      $rootScope.sectorName         = 'Manage Questions';
      $scope._SID                   = parseInt($stateParams.id);
      $scope._questions             = [];
      $scope.options                = {
        minAnswers  : 2,
        maxAnswers  : 5
      };

      $scope.questModel             = {
        answerGroup : [],
        questScore  : 1,
        surveySID   : $scope._SID,
        questType   : 1,
      };


      /* fetch data */
      $rootScope.$RequestServ = $http.get("api/survey/survey.json")
      .then(function(response) {
        var totalSurv = response.data;
        $scope.surveyArray = [];
        for (var i = 0; i < totalSurv.length; i++) {
          thisItem = totalSurv[i];
          var plusItem = {
            id    : thisItem._id,
            value : thisItem.name
          };
          $scope.surveyArray.push(plusItem);
        }
      });

      if ($scope._SID > 0 || parseInt($scope.questModel.surveySID) > 0){
        $rootScope.$RequestServ = $http.get("api/questions/"+ $scope.questModel.surveySID +".json")
        .then(function(response) {
          $scope._questions = response.data;
        });
      }

      $scope.changeSurvey = function (surveyID){
        $rootScope.$RequestServ = $http.get("api/questions/"+ surveyID +".json")
        .then(function(response) {
          $scope._questions = response.data;
        });
      }
      /* end fetch data */


      // do actions
      $scope.addAnswer = function(){
          var inArray = {
            text : $scope.questModel.answers
          };
          $scope.questModel.answerGroup.push(inArray);
          $scope.questModel.answers = "";
      }

      $scope.removeAnswer = function (answerIndex){
        $scope.questModel.answerGroup.splice(answerIndex, 1);
      }

      $scope.addQuestion = function(formValid){
          if (formValid.$valid == true){
            $scope._questions.push($scope.questModel);
            $scope.questionForm.$setPristine();
            $scope.questModel = {
              questScore: "",
              questType: 1,
              questTitle : "",
              answerGroup :[]
            };
          }
      }

      $scope.removeQestion = function (qIndex){
        $scope._questions.splice(qIndex, 1);
      }
});


UIASSIGN1.controller('targetCTRL', function($scope , $rootScope , $state, $stateParams , $http ) {
  $rootScope.sectorName         = 'Manage Target Section';
  $scope._SID                   = parseInt($stateParams.id);


  /* fetch data */
  $rootScope.$RequestServ = $http.get("api/survey/survey.json")
  .then(function(response) {
    var totalSurv = response.data;
    $scope.surveyArray = [];
    for (var i = 0; i < totalSurv.length; i++) {
      thisItem = totalSurv[i];
      var plusItem = {
        id    : thisItem._id,
        value : thisItem.name
      };
      $scope.surveyArray.push(plusItem);
    }
  });

  $rootScope.$RequestServ = $http.get("api/users/groups.json")
  .then(function(response) {
    var totalGroups = response.data;
    $scope.userGroups = [];
    for (var i = 0; i < totalGroups.length; i++) {
      thisItem = totalGroups[i];
      var plusItem = {
        id    : thisItem._id,
        value : thisItem.name
      };
      $scope.userGroups.push(plusItem);
    }
  });


});




UIASSIGN1.controller('fillCTRL', function($scope , $rootScope , $state, $stateParams , $http ) {

  $rootScope.sectorName         = 'Manage fill survey';
  $scope._SID                   = parseInt($stateParams.id);
  $scope.questModel             = {
    questionGroup : []
  };
  $rootScope.$RequestServ = $http.get("api/survey/survey.json")
  .then(function(response) {
    var totalSurv = response.data;
    $scope.surveyArray = [];
    for (var i = 0; i < totalSurv.length; i++) {
      thisItem = totalSurv[i];
      var plusItem = {
        id    : thisItem._id,
        value : thisItem.name
      };
      $scope.surveyArray.push(plusItem);
    }
  });

  if ($scope._SID > 0 || parseInt($scope.questModel.surveySID) > 0){
    $rootScope.$RequestServ = $http.get("api/questions/"+ $scope.questModel.surveySID +".json")
    .then(function(response) {
      $scope._questions = response.data;
    });
  }

  $scope.changeSurvey = function (surveyID){
    $rootScope.$RequestServ = $http.get("api/questions/"+ surveyID +".json")
    .then(function(response) {
      $scope._questions = response.data;
    });
  }


  $scope.totalScore = [];
  for (var i = 1; i < 11; i++) {
    var plusItem = {
      id    : i,
      value : i
    };
    $scope.totalScore.push(plusItem);
  }


});
