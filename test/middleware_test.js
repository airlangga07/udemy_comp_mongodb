const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const BlogPost = require('../src/blogPost');

describe('Middleware', () => {

  let joe, blogPost;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'JS is Great', content: 'Yep! It is Great!' });

    // referencing the blogpost to user, one-to-many array, so we push
    joe.blogPosts.push(blogPost);

    // ES6 Spec, takes an array of promises, and get a get one then() statement. 
    Promise.all([joe.save(), blogPost.save()])
      .then(() => done());
  });

  it('users clean-up dangling blogposts on remove', (done) => {
    joe.remove()
       .then(() => BlogPost.count())
       .then((count) => {
          assert(count === 0);
          done();
       });
  });

});