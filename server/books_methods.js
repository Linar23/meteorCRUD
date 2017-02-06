// Объявляются методы, которые могут удаленно вызываться клиентом
Meteor.methods({
	insertData_books:function(obj){
		books.insert(obj);
	},
	updateData_books:function(id,obj){
		books.update({_id:id}, {$set:obj});
	},
	deleteData_books:function(id){
		books.remove({_id:id});
	}
})