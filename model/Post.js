mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    postDate: {
      type: Date,
      default: Date.now,
      required: true
    },
    tags: {
      type: [String]
    },
    content: {
      type: String,
      required: true
    },
    rating: {
      type: [Number]
    }
  },
  {
    collection: 'posts'
  }
);

module.exports = mongoose.model('Posts', PostSchema);
