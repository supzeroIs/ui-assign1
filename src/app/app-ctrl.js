


UIASSIGN1.controller('mainCTRL', function($scope , $rootScope ) {
			// #dummy controller
      $rootScope.sectorName = 'Home';
});



UIASSIGN1.controller('surveyCTRL', function($scope , $rootScope , $http  ) {
			// #dummy controller
      $rootScope.sectorName = 'Manage survey';
      $scope.surveyForm = {
        surveyTitle : ""
      };

      $http.get("api/survey/survey.json")
      .then(function(response) {
          $scope.totalSurvey = response.data.surveys;
      });


      // add survey
      $scope.addSurvey = function(surveyForm) {
          if (surveyForm.surveyTitle){

            var newSurvey =     {
                  "name"        : surveyForm.surveyTitle,
                  "percent"     : Math.floor((Math.random() * 100) + 1),
                  "questions"   : Math.floor((Math.random() * 20) + 1),
                  "quest"       : []
                };
            $scope.totalSurvey.push(newSurvey);
            // reset form
            $scope.surveyForm = {};
          }
      };

      $scope.removeSurvey = function (surveyID){
            $scope.totalSurvey.splice(surveyID, 1);
      }
});
