const initSharanApp=require("./app-tst-base");
const request = require('supertest');


describe('GET Registrations /regs', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .get('/regs?event_id=1')
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


describe('POST Registrations /regs', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .post('/regs')
      .send({

        "event_id": 1,
        "fullname": "Clasi",
        "gender": "F",
        "age": 25,
        "centre": "",
        "subcentre": "",
        "zone": "",
        "is_member": 1,
        "alotted_room": ""

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



describe('DELETE Registrations /regs', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .delete('/regs/8')
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


describe('PUT Registrations /regs', function() {
  const app=initSharanApp();
  it('responds with json', function(done) {
    request(app)
      .put('/regs/3')
      .send({
        "fullname": "Munnesmmmm",
        "gender": "F",
        "age": 25
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