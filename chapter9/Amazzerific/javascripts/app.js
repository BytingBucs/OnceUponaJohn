var main = function (toDoObjects) {
    "use strict";

    var toDos,
		tabs;
		
		toDos = toDoObjects.map(function (toDo)){
			return toDo.description;
			
		});
		
		//This is were I create the array of tabs
		tabs = [];
		
		//Add the "Newest" tab
		tabs.push({
			"name":"Newest",
			"content":function (callback) {
				$.get("todos.json", function(toDoObjects) {
					var $content = $("<ul>");
					
					for(var i = toDoObjects.length-1; i >= 0; i--) {
						$content.append($("<li>").text(toDoObjects[i].description));
					}
					//call the callback with the $content (don't really get what we are doing here)
					callback($content);
				});fail(function (jqXHR, textStatus, error) {
					callback(error, null)
				}
			}
		});
		
		//add the "Oldest" tab
		tabs.push({
			"name":"Oldest",
			"content":function(){
				$.get("todos.json", function(toDoObjects) {
					var $content = $("<ul>");
					
					for(var i = toDoObjects.length-1; i >= 0; i--) {
						$content.prepend($("<li>").text(toDoObjects[i].description));
					}
					//call the callback with the $content (don't really get what we are doing here)
					callback($content);
				});fail(function (jqXHR, textStatus, error) {
					callback(error, null)
				}
			}
		});
		
		//add the "Tags" tab
		tabs.push({
			"name":"Tags",
			"content":function(){
				//create tags content
				return $content;
			}
		});
		
		//add the "Add" tab
		tabs.push({
			"name":"Add",
			"content":function(){
				return $content;
			}
		});
		
		//new and improved button
		$button.on("click", function () {
			var description = $input.val(),
			tags = $tagInput.val().split(","),
			newToDo = {"description":description, "tags":tags};
			
			//I guess this clears our the new input boxes
			$.post("todos", newToDo, function(result) {
				$input.val("");
				$tagInput.val("");
				
				$(".tabss a:first span").trigger("click");
			});
		});
		
			tab.content(function($content) {
				$("main .content").append($content);
			});
			return false;
		});
	});
	$(".tabs a:first-child span").trigger("click");
};
	
$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});
