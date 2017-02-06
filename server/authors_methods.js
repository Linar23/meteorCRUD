// Объявляются функции, которые могут удаленно вызываться клиентом
Meteor.methods({
	insertData_authors:function(obj){
		authors.insert(obj);
	},
	updateData_authors:function(id,obj){
		authors.update({_id:id}, {$set:obj});
	},
	deleteData_authors:function(id){
		authors.remove({_id:id});
	}
})