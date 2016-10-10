describe('movie core service', function() {
   var $httpBackend;
   var PopularMovies = {};

   beforeEach(module('movieCore'));
   
   beforeEach(inject(function(_PopularMovies_, _$httpBackend_) {
      dump('_$httpBackend_ : ' + _$httpBackend_);
      PopularMovies = _PopularMovies_;
      $httpBackend = _$httpBackend_; 
       
   }));
   
   afterEach(function() {
       
   });
   
   it('# should authenticate requests', function() {
       var expectedHeaders = function(headers) {
           dump(angular.mock.dump(headers));
           return true;    
       };
       
       
       
       $httpBackend.expectGET('popular/tt01636', expectedHeaders)
            .respond(200);

       PopularMovies.get({movieId: 'tt01636'});
       
       $httpBackend.flush();
   }); 
});