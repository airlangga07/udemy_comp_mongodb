const assert = require('assert');
const User = require('../src/user');

describe('Deleting a User', () => {
  var joe;

  beforeEach(done => {
    joe = new User({ name: 'Joe' });
    joe.save().then(() => done());
  });

  it('model instance remove', (done) => {
    joe.remove()
       .then(() => User.findOne({ name: 'Joe' }))
       .then(user => {
         assert(user === null);
         done();
       })
  });

  it('class method find and remove', (done) => {
    // remove a bunch or records with some given criteria
    User.remove({ name: 'Joe' })
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it('class method findOneAndRemove', (done) => {
    User.findOneAndRemove({ name: 'Joe' })
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove(joe._id)
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

});