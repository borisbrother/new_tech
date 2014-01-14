var eventObject = {

	addEvent: function(elem, method, func) {

		if (elem.addEventListener) {
			elem.addEventListener(method, func, false);
		} else if (elem.attachEvent) {
			elem.attachEvent("on" + method, func);
		} else {
			elem["on" + method] = func;
		}
	},

	removeEvent: function(elem, method, func) {
		if (elem.removeEventListener) {
			elem.removeEventListener(method, func);
		} else if (elem.detachEvent) {
			elem.detachEvent("on" + method, func);
		} else {
			elem["on" + method] = null;
		}
	}
};

var person = {
	name : "Николай",
	age : 23,
	gender : 1
};




Object.prototype.call = function() {};

// for (i in person) {	
// 	if (Object.prototype.hasOwnProperty.call(person, i)) {
// 		// console.log(i, ":", person[i]);
// 	}	
// }

var func = function() {
	var arguments = Array.slice.call(this, arguments);
	var myFunc = arguments.shift();
	// console.log(arguments.reduce(myFunc));
};

func(function(a, b) {
	return a + b;
}, 2,3,4,5);



var objectReg = {
	reg: "",
	dist: "",
	replace: function(el) {
		el.innerHTML = el.innerHTML.replace(this.reg, this.dist);
	}
};

var toLink = document.getElementsByTagName('p');
objectReg.reg = /(\w*te\w*)/ig;
objectReg.dist = "<a href='$1'>$1</a>";

for (i = 0, max = toLink.length; i < max; i++) {
	objectReg.replace.call(objectReg, toLink[i]);
	//toLink[i].innerHTML = toLink[i].innerHTML.replace(/(\w*si\w*\s)/ig, "<a href='#'>$1</a>"); 
	//toLink[i].innerHTML.replace(/(Lorem)/g, "Boris");
}

var house = ({
	width: 25,
	height:50,
	getSquare: function() {
		return this.width * this.height;
	},
	init: function() {
		console.log(this.getSquare());
		return this;
	}
}).init();

console.log(2 * house.getSquare());