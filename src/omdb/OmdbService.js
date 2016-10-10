angular.module('omdb', [])
    .factory('omdbApi', function($http, $q) {
        var service = {};
        
        // var baseUrl = 'http://www.omdbapi.com/?y=&plot=full&r=json&';
        var baseUrl = 'http://www.omdbapi.com/?r=json&';
        var searchUrl;
        var findUrl;
        
        // for testing
        service.getSearchUrl = function() {
            return searchUrl;   
        };
        
        service.getFindUrl = function() {
            return findUrl;  
        };
        
        service.search = function(query) {
            var deferred = $q.defer();
            searchUrl = baseUrl + 't=' + encodeURIComponent(query);
            
            console.log('searchUrl : ' + searchUrl);
            
            // $http.get()          // bug, not passing the url
            $http.get(searchUrl)
                .success(function(data) {
                //    angular.mock.dump('data from rest :  ' + data);   // works, BUT should not put ngMock dependencies here
                console.log('data from rest : ' + data);
                   deferred.resolve(data);  
                });
            return deferred.promise;
        };
        
        service.find = function(id) {
            var deferred ;
            
            deferred = $q.defer();
            
            // findUrl = baseUrl + 'i=' + encodeURIComponent(id);
            findUrl = baseUrl + 'i=' + id;

            
            $http.get(findUrl)
                .success(function(data) {
                    // deferred = data;           // WRONG
                    // deferred = resolve(data);     // WRONG syntax       
                    deferred.resolve(data);
                })
                // .error(function(data) {
                    // throw data;        // not working
                .error(function() {
                    deferred.reject();
                });

            return deferred.promise;
            
            // return {"Title":"American Pie","Year":"1999","Rated":"R","Released":"09 Jul 1999","Runtime":"95 min","Genre":"Comedy","Director":"Paul Weitz, Chris Weitz","Writer":"Adam Herz","Actors":"Jason Biggs, Chris Klein, Thomas Ian Nicholas, Alyson Hannigan","Plot":"Four teenage boys enter a pact to lose their virginity by prom night.","Language":"English","Country":"USA","Awards":"9 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_SX300.jpg","Metascore":"58","imdbRating":"7.0","imdbVotes":"317,667","imdbID":"tt0163651","Type":"movie","Response":"True"};
        };
        
        return service;
    });