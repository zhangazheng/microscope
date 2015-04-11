Posts = new Mongo.Collection('posts');


Meteor.methods({
    postInsert: function (postAttributes) {
        check(Meteor.userid(), String);
        check(postAttributes, {
            title: String,
            url: strig
        });
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        }
    }
});