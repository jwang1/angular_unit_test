angular.module('omdb', [])
    .factory('omdbApi', function() {
        var service = {};
        
        service.search = function(query) {
            return {"Search":[{"Title":"American Pie","Year":"1999","Rated":"R","Released":"09 Jul 1999","Runtime":"95 min","Genre":"Comedy","Director":"Paul Weitz, Chris Weitz","Writer":"Adam Herz","Actors":"Jason Biggs, Chris Klein, Thomas Ian Nicholas, Alyson Hannigan","Plot":"Four teenage boys enter a pact to lose their virginity by prom night.","Language":"English","Country":"USA","Awards":"9 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_SX300.jpg","Metascore":"58","imdbRating":"7.0","imdbVotes":"317,667","imdbID":"tt0163651","Type":"movie","Response":"True"}]};
        };
        
        service.find = function(id) {
            return {"Title":"American Pie","Year":"1999","Rated":"R","Released":"09 Jul 1999","Runtime":"95 min","Genre":"Comedy","Director":"Paul Weitz, Chris Weitz","Writer":"Adam Herz","Actors":"Jason Biggs, Chris Klein, Thomas Ian Nicholas, Alyson Hannigan","Plot":"Four teenage boys enter a pact to lose their virginity by prom night.","Language":"English","Country":"USA","Awards":"9 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_SX300.jpg","Metascore":"58","imdbRating":"7.0","imdbVotes":"317,667","imdbID":"tt0163651","Type":"movie","Response":"True"};
        };
        
        return service;
    });