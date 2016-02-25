var main = function (toDoObjects) {
    "use strict";

    var toDos = toDoObjects.map(function (toDo) {
          // we'll just return the description
          // of this toDoObject
          return toDo.description;
    });

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });

            } else if ($element.parent().is(":nth-child(3)")) {
                var tags = [];

                toDoObjects.forEach(function (toDo) {
                    toDo.tags.forEach(function (tag) {
                        if (tags.indexOf(tag) === -1) {
                            tags.push(tag);
                        }
                    });
                });
                
				console.log(tags);
				
				var tagObjects = tags.map(function (tag) {
					var toDosWithTag = [];
					
					toDoObjects.forEach(function (toDo) {
						if (toDo.tags.indexOf(tag) !==-1) {
							toDoWithTag.push(toDo.description);
						}
					});
					
					return {"name": tag, "toDos": toDoWithTag };
				});
				
				tagObjects.forEach(function (tag) {
					
				}
				//Line 59 of Sammy's code