const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'joe' });
    joe.save().then(() => done());
  });

  it('finds all users with the name of joe', () => {

  });

});