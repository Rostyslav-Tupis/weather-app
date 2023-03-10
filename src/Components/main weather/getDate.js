let objToday = new Date(),
	weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th" }(),
	// eslint-disable-next-line
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	curMonth = months[objToday.getMonth()]

	
export var today = dayOfWeek;
export let date = curMonth + " " + dayOfMonth;

