const assert = require('assert');
const User = require('../src/user');

describe('Updating a Record', () => {
  let joe;

  beforeEach(done => {
    joe = new User({ name: 'Joe' });
    joe.save().then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then(users => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  }

  it('model instance method set and save', (done) => {
    joe.set('name', 'Alex');
    assertName(joe.save(), done);
       
  });

  it('model instance method update', (done) => {
    assertName(joe.update({ name: 'Alex' }), done);
  });

})