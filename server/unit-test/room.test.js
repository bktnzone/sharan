const initSharanApp=require("./app-tst-base");
const request = require('supertest');


describe('GET  Allotments   /rooms/allotments', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .get('/rooms/allotments?venue_id=1&event_id=1')
      //.send({name: 'john'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(JSON.stringify(res.body));
        done();
      });
  });
});



describe('POST  Allotments   /rooms/allotments', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .post('/rooms/allotments/?event_id=1&venue_id=1')
      .send({
        "reg_id":1,
        "room_id":1,
         is_cot:1


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


describe('POST  Allotments Release  /rooms/allotments', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .post('/rooms/allotments/?event_id=1&venue_id=1')
      .send({
        "reg_id":2,
        "room_id":1,
         is_cot:1,
         id:1,
         is_active:0


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

