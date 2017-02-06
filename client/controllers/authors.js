// Обрабатываем то, что происходит на форме при нажатии кнопки добавить
Template.authors.events({
	'submit form': function (e) {
		e.preventDefault();
		if(e.target.name.value=="") {
            alert("Пустое текстовое поле");
        }
        else{
		    var name=e.target.name.value;
		    var obj={
			    name:name
		    }
		    // Производим update
		    if(this._id){
			    Meteor.call('updateData_authors',this._id,obj);
			    Router.go('/');
		    }
		    // Производим insert
		    else{
			    Meteor.call('insertData_authors',obj);
			    document.getElementById('form_authors').reset();
		    }
	    }
	},
	// Обработка нажатия на удалить
	'click #remove':function(e){
		Meteor.call('deleteData_authors',this._id);
	},
});
// Хелпер для занесения данных в таблицу
Template.authors.helpers({
	getData: function () {
		return authors.find();
	}
});