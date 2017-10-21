const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
  
    it('Saves a user', (done) => {
      const joe = new User({ name: 'Joe' });

      joe.save().then(() => {
        // has joe has been successfully saved?
        assert(!joe.isNew);
        done();
      });
    });

});