// Объявляются методы, которые могут удаленно вызываться клиентом
Meteor.methods({
	insertData_publishers:function(obj){
		publishers.insert(obj);
	},
	updateData_publishers:function(id,obj){
		publishers.update({_id:id}, {$set:obj});
	},
	deleteData_publishers:function(id){
		publishers.remove({_id:id});
	}
})