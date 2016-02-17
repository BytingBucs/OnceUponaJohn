var main = function () {    

	
		var toDos = [
			"Finish writing this book",
			"Take Gracie to the park",
			"Answer emails",
			"Prep for Mondays class",
			"Make up some more toDos",
			"Get groceries"
	];

	$(".tabs a span").toArray().forEach(function(element){
		var $element = $(element);
		
	$element.on("click", function(){
		var $userinput, 
		$content, 
		$submit, 
		i;
		
		$(".tabs a span").removeClass("active");
		$element.addClass("active");
		$("main.content").empty();
		
		if($element.parent().is(":nth-child(1)")) {
			$content = $("<ul>");
			for (i = toDos.length-1; i >= 0; i--){
				$content.append($("<li>").text(toDos[i]));
			}
			}else if($element.parent().is("nth-child(2)")) {
				$content = $("<ul>");
				toDos.forEach(function (todo){
					$content.append($("<li>").text(todo));
				});
			}else if ($element.parent().is("nth-child(3)")) {
					$userinput = $("<userinput>"),
					$submit = $("submit").text("+");
					
					$submit.on("click", function () {
						if (userinput.val() !=="") {
							toDos.push($userinput.val());
							$input.val("");
						}
					});
					
					$content = $("<div>").append($userinput).append($submit);
			}
					$("main .content").append($content);
					
					return false;
	});
	});
	$(".tabs a:first-child span").trigger("click");
};
	
$(document).ready(main);
