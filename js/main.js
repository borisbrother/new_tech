window.onload = function() {
	var mylist = document.getElementById("mylist");
	for (i = 1; i < 10; i++) {
		var li = document.createElement('li');
		var a = document.createElement('a');
		a.setAttribute('href', '#');
		// a.onclick = function(q) { 
		// 	return function(e) {
		// 		e.preventDefault();
		// 		alert(q); 
		// 	}
		// }(i);
		a.onclick = function () {
			var q = i;
			return function cl() {
				alert(q);
			} 			
		}();
		a.innerHTML = "Меню " + i;
		li.appendChild(a);
		mylist.appendChild(li);
	}
}