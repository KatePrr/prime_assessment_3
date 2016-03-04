//myApp.factory('DataFactory', ['$http', function($http) {
//
//   //PRIVATE
//
//    var heroData = undefined;
//
//    // add to database
//    var saveHero = function(hero) {
//        console.log('saving hero: ', hero);
//        var promise = $http.post('/hero', hero).then(function(response){
//            console.log('hero saved');
//            return getHeroData();
//        });
//        return promise;
//    };
//
//    // remove from database
//
//
//
//
//
//    // PUBLIC
//    var publicHeros = {
//        factoryHeroData: function() {
//            return heroData;
//        },
//        factory
//
//    }
//
//
//
//
//
//
//
//}]);