const assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');

describe('Associations', () => {

  let joe, blogPost, comment;
  
  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'JS is Great', content: 'Yep! It is Great!' });
    comment = new Comment({ content: 'Congrats on great post!' });

    // referencing the blogpost to user, one-to-many array, so we push
    joe.blogPosts.push(blogPost);
    // referencing the comment to blogpost, one-to-many array, so we push
    blogPost.comments.push(comment);
    // referencing the comment to user, one-to-one array, so we just initialize the object to prop
    comment.user = joe;

    // ES6 Spec, takes an array of promises, and get a get one then() statement. 
    Promise.all([joe.save(), blogPost.save(), comment.save()])
      .then(() => done());
  });

  it('saves a relation between a user and a blogpost', (done) => {
    User.findOne({ name: 'Joe' })
        .populate('blogPosts')
        .then(user => {
          assert(user.blogPosts[0].title === 'JS is Great');
          done();
        });
  });

});