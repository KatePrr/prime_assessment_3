myApp.controller('EntryController', ['$scope', '$http', function($scope, $http) {
    //$scope.dataFactory = DataFactory;

    $scope.heroType = '';
    $scope.heroTypes = [
        {type: 'invisibility', label: 'Invisibility'},
        {type: 'flight', label: 'Flight'},
        {type: 'superSpeed', label: 'Super Speed'},
        {type: 'heatVision', label: 'Heat Vision'},
        {type: 'superStrength', label: 'Super Strength'},
        {type: 'acceleratedHealing', label: 'Accelerated Healing'},
        {type: 'powerBlast', label: 'Power Blast'},
        {type: 'animalAffinity', label: 'Animal Affinity'}
    ];

    $scope.saveHero = function() {
        var hero = {
            //heroType: $scope.heroType,
            alias: $scope.alias,
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            city: $scope.city,
            primary_power: $scope.primary_power
        };
        //console.log(hero);

        //$scope.dataFactory.factorySaveHero(hero);

        $http.post('/heroes', hero).then(function(response) {
            $scope.hero = response.data;
            $scope.alias = '';
            $scope.first_name = '';
            $scope.last_name = '';
            $scope.city = '';
            $scope.primary_power = ''
        });
    };


    $scope.powerList = function() {

        var superPower = {
            power_name: $scope.heroType.type
        };
    //console.log(superPower);

    $http.post('/superPower', superPower).then(function(response) {
       console.log(superPower);
        $scope.superPower = response.data;
        $scope.superPower = '';
    });
    console.log(superPower);
    };


}]);