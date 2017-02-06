// Конфигурируем default layout template для всех маршрутов
Router.configure({
	layoutTemplate:'mainlayout'
});
// На корневой странице используем template 'content'
Router.route('/',{
	name:'content'
});
// Задаем путь для update
Router.route('/updateAuthors/:_id',{
	name:'updateAuthors',
	template:'content',
	data:function(){
		return authors.findOne({_id:this.params._id});
	},
});
Router.route('/updatePublishers/:_id',{
	name:'updatePublishers',
	template:'content',
	data:function(){
		return publishers.findOne({_id:this.params._id});
	},
});

//Router.route('/updateBooks/:_id',{
//	name:'updateBooks',
//	template:'content',
//	data:function(){
//		return books.findOne({_id:this.params._id});
//	},
//});