// Сообщаем Meteor, какие данные хотим отправить на клиент
Meteor.publish('authors',function(){
	return authors.find({});
});

Meteor.publish('publishers',function(){
	return publishers.find({});
});

Meteor.publish('books',function(){
	return books.find({});
});