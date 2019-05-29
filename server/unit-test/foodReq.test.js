const initSharanApp=require("./app-tst-base");
const request = require('supertest');


describe('GET food-request /food-reqs', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .get('/food-reqs')
      //.send({name: 'john'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        //console.log(JSON.stringify(res.body));
        done();
      });
  });
});


describe('POST food-reqs /food-reqs', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .post('/food-reqs')
      .send({
            details:"Food Req 1"

      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err){
          console.log(res.text);
          return done(err);
        }

        done();
      });
  });
});



describe('DELETE food-reqs /food-reqs', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .delete('/food-reqs/8')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err){
          console.log(res.text);
          return done(err);
        }

        done();
      });
  });
});


describe('PUT food-reqs /food-reqs', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .put('/food-reqs/2')
      .send({
        details:"Moses"
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err){
          console.log(res.text);
          return done(err);
        }
        done();
      });
  });
});