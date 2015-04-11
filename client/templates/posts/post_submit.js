Template.postSubmit.events({
	'submit form' :function(e){
		e.preventDefault();
		console.log(e);
		var post = {
			url: $(e.target).find('[name=url]').val(),
			title:$(e.target).find('[name=title]').val()
		};
		Meteor.call('postInsert',post,function(error,result){
			//显示错误信息并退出
			if(error){
				return alert(error.reason);
			}
			if(result.postExists){
				alert('改链接已经存在');
			}
			Router.go('postPage',{_id:result._id});
		});
	}
});