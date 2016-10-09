describe('omdb service', function() {
   var movieData = {"Search":[{"Title":"American Pie","Year":"1999","Rated":"R","Released":"09 Jul 1999","Runtime":"95 min","Genre":"Comedy","Director":"Paul Weitz, Chris Weitz","Writer":"Adam Herz","Actors":"Jason Biggs, Chris Klein, Thomas Ian Nicholas, Alyson Hannigan","Plot":"Four teenage boys enter a pact to lose their virginity by prom night.","Language":"English","Country":"USA","Awards":"9 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_SX300.jpg","Metascore":"58","imdbRating":"7.0","imdbVotes":"317,667","imdbID":"tt0163651","Type":"movie","Response":"True"}]};
   
   var movieDataById = {"Title":"American Pie","Year":"1999","Rated":"R","Released":"09 Jul 1999","Runtime":"95 min","Genre":"Comedy","Director":"Paul Weitz, Chris Weitz","Writer":"Adam Herz","Actors":"Jason Biggs, Chris Klein, Thomas Ian Nicholas, Alyson Hannigan","Plot":"Four teenage boys enter a pact to lose their virginity by prom night.","Language":"English","Country":"USA","Awards":"9 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_SX300.jpg","Metascore":"58","imdbRating":"7.0","imdbVotes":"317,667","imdbID":"tt0163651","Type":"movie","Response":"True"};
   
  var omdbApi = {};

   beforeEach(function() {
      angular.mock.module('omdb'); 
      angular.mock.inject(function(_omdbApi_) {
          omdbApi = _omdbApi_;
      });
   });
   
//    it('# should return search movie data', function(angular) {  // can cause : Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
   it('# should return search movie data', function() {
      
      // debugging
      console.log(omdbApi.search('pie'));  
      
      // using ngMock dump to debug
      console.log(angular.mock.dump(omdbApi.search('pie')));
      
      // also using Karma dump debug
      dump(angular.mock.dump(omdbApi.search('pie')));

    //   expect(omdbApi.search('pie')).toBe(movieData);     // after getting data from the Real service, "toBe" not be held any more 
    
      expect(omdbApi.search('pie')).toEqual(movieData);
   }); 
   
   it('# should return movie data by id', function() {
       expect(omdbApi.find('tt016365')).toEqual(movieDataById);
   })
});