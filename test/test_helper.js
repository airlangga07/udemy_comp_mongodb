const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => {})
    .on('error', (error) => console.warn('Warning ', error));  
  done();
});

beforeEach((done) => {
  const { users, comments, blogPosts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogPosts.drop(() => {
        done();
      });
    });
  });
})