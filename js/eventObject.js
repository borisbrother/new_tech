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