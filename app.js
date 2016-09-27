
var todoCount = 0;

// On Click event associated with the addTodo function
$("#add").on("click", function(){

	// Grab the value of the text box
	var todoTask = $('#newtask').val().trim();

	
	var todoItem = $('<p>');
	todoItem.attr("id", "item-" + todoCount);
	todoItem.append(" " + todoTask);

	
	var todoClose = $("<button>");
	todoClose.attr("data-todo", todoCount);
	todoClose.addClass("checkbox");
	todoClose.append("X");

	// Append the button to the todoitem
	todoItem = todoItem.prepend(todoClose);

	// Add the button and todo item to the todos div
	$("#tasks").append(todoItem);

	// Clear the textbox when done
	$('#newtask').val("");

	// Add to the Count
	todoCount++;

	
	return false;
});

// When a user clicks a check box then delete the specific content 
$(document.body).on('click', '.checkbox', function(){

	// Get the todoNumber of the button from its data attribute.
	var todoNumber = $(this).data("todo");

	// Empty the specific <p> element that previously held the todo item.
	$("#item-" + todoNumber).empty();

});
