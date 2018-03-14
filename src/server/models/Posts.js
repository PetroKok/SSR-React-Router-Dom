import Posts from '../collections/posts'

exports.all = (callback) => {
    Posts.find({}, (err, posts) =>{
        callback(err,posts)
    })
};

exports.createPost = (p, callback) =>{
  let post = new Posts(p);
  post.save((e, r)=>{
      callback(e, r);
  })
};