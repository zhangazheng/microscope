Posts = new Mongo.Collection('posts');

Posts.allow({
    insert:function(userId,doc){
        return !!userId;//只允许登录用户添加帖子
    }
});