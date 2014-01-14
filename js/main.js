window.onload = function() {
	var mylist = document.getElementById("mylist");
	if (mylist !== null) {
		for (i = 1; i < 10; i++) {
			var li = document.createElement('li'),
				a = document.createElement('a');
			a.setAttribute('href', '#');
			a.onclick = function(q) { 
				return function(e) {
					e.preventDefault();
					alert(q); 
				}
			}(i);
			
			a.innerHTML = "Меню " + i;
			li.appendChild(a);
			
			mylist.appendChild(li);
		}
		
	}


	var buttons = document.getElementsByTagName('button'),
		karkas = document.getElementById("karkas");
	var changeColor = function(event) {
		var target = event.target || event.srcElement;
		event.preventDefault ? event.preventDefault() : event.returnValue =  false;
		
		if (event.stopPropagation)	{
			event.stopPropagation();
		} else if (event.cancelBubble) {
			event.cancelBubble = true;
		}
		
		document.body.className = target.id;
	}

	

	for (i = 0, len = buttons.length; i < len; i++) {
		eventObject.addEvent(buttons[i], "click", changeColor);
	}

	//eventObject.removeEvent(buttons[0], "click", changeColor);
} 