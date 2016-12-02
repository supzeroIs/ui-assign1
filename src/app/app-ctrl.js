


UIASSIGN1.controller('mainCTRL', function($scope , $rootScope , $http ) {
			// #dummy controller
      $rootScope.sectorName = 'Home';

      $http.get("api/survey/users.json")
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

      $http.get("api/survey/survey.json")
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
            $scope.totalSurvey.push(newSurvey);
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
      $rootScope.sectorName         = 'Questions';
      $scope._SID                   = parseInt($stateParams.id);

      $scope.options                = {
        minAnswers  : 2,
        maxAnswers  : 5
      };

      $scope.questModel             = {
        answerGroup : [],
        questScore  : 5,
        surveySID   : $scope._SID,
        questType   : 1,
      };

      $http.get("api/survey/survey.json")
      .then(function(response) {
        var surveyArray = response.data;
        $scope.surveyArray = [];
        for (var i = 0; i < surveyArray.length; i++) {
          var thisItem  = surveyArray[i];
          var thisElm   = {name:thisItem.name,value:parseInt(thisItem._id)};
          $scope.surveyArray.push(thisElm)
        }

      });



      $scope.addAnswer = function(){
        console.log($scope.questModel);
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
        
      }
});
