const initSharanApp=require("./app-tst-base");
const request = require('supertest');


describe('GET buildings /buildings', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .get('/buildings')
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


describe('POST buildings /buildings', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .post('/buildings')
      .send({
            title:"Venue 1",
            description:"Venue 1"

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



describe('DELETE buildings /buildings', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .delete('/buildings/8')
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


describe('PUT buildings /buildings', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .put('/buildings/3')
      .send({
        description:"Simple"
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