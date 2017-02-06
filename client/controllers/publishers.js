// Обрабатываем то, что происходит на форме - Издетельства
Template.publishers.events({
	'submit form': function (e) {
		e.preventDefault();
		if(e.target.title.value=="") {
            alert("Пустое текстовое поле");
        }
        else{
		    var title=e.target.title.value;
		    var obj={
			    title:title
		    }
		    // Производим update
		    if(this._id){
			    Meteor.call('updateData_publishers',this._id,obj);
			    Router.go('/');
		    }
		    // Производим insert
		    else{
			    Meteor.call('insertData_publishers',obj);
			    document.getElementById("form_publishers").reset();
		    }
	    }
	},
	// Обработка нажатия на удалить
	'click #remove':function(e){
		Meteor.call('deleteData_publishers',this._id);
	}
});
// Хелпер для занесения данных в таблицу
Template.publishers.helpers({
	getData: function () {
		return publishers.find();
	}
});