function formatTime(t) {
	let days, hours, minutes;
	days = ~~(t / 1440);
	hours = ~~((t - days * 1440) / 60);
	minutes = t - days * 1440 - hours * 60;
	return days + 'day(s) ' + hours + 'hour(s) ' + minutes + 'minute(s)'; 
}
console.log('formatTime(120);//=>',formatTime(120));
console.log('formatTime(59);//=>',formatTime(59));
console.log('formatTime(3601);//=>',formatTime(3601));