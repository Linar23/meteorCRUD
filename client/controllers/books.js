// Обрабатываем то, что происходит на форме - Книги
// Здесь сделал костыль( потому что не получалось изменять значения select 
// с помощью iron:router
Template.books.events({
	'submit form': function(e){
		e.preventDefault();
		if(e.target.title_book.value=="") {
            alert("Пустое текстовое поле");
        }
        else{
		    var title_book=e.target.title_book.value;
		    var author=e.target.author.value;
		    var publisher=e.target.publisher.value;
		    var obj={
			    title_book:title_book,
			    author:author,
			    publisher:publisher
		    } 
		    // Производим update
		    if(isUpdate == true){
			    Meteor.call('updateData_books',id,obj);		
			    isUpdate=false;
			    id = null;
			    document.getElementById("form_books").reset();
		    }
		    // Производим insert
		    else{
			    Meteor.call('insertData_books',obj);
			    document.getElementById("form_books").reset();			    
		}
	}
	},
	// Обработка нажатия на удалить
	'click #remove':function(e){
		Meteor.call('deleteData_books',this._id);
	},
	// Обработка нажатия на изменить
	'click #update':function(e){
		document.getElementById("input_title_book").value = this.title_book;
		document.getElementById("input_author").value = this.author;
		document.getElementById("input_publisher").value = this.publisher;
		isUpdate = true;
		id = this._id;
	}
});

isUpdate = false;
// Хелпер для занесения данных в таблицу
Template.books.helpers({
	getData: function () {
		return books.find();
	}
});
// Хелпер для занесения данных в select
Template.books.helpers({
	authorsList: function () {
		return authors.find();
	}
});
// Хелпер для занесения данных в select
Template.books.helpers({
	publishersList: function () {
		return publishers.find();
	}
});