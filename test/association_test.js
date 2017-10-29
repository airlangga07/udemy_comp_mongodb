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
  });

  it('', (done) => {

  });

});