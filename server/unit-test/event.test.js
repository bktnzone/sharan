const initSharanApp=require("./app-tst-base");
const request = require('supertest');


describe('GET Events /events', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .get('/events?venue_id=1')
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


describe('POST Events /events', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .post('/events')
      .send({
            title:"Event 1",
            description:"Event Desc 1",
            venue_id:23

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



describe('DELETE Events /events', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .delete('/events/8')
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


describe('PUT Events /regs', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .put('/events/3')
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