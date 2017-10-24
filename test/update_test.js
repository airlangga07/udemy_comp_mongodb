const assert = require('assert');
const User = require('../src/user');

describe('Updating a Record', () => {
  let joe;

  beforeEach(done => {
    joe = new User({ name: 'Joe' });
    joe.save().then(() => done());
  });

  it('model instance method set and save', (done) => {

  });
})