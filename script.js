function blinker() {
	$('.header__title-element').fadeOut(500);
	$('.header__title-element').fadeIn(500);
}
setInterval(blinker(), 1000);

const output = document.getElementById('main__response');

setInterval(function(){

	var inputDate = document.getElementById('main__input-date').value;
	console.log();
	output.innerHTML = subtractDates(inputDate);

},1000);

function subtractDates(date){

	var input = new Date(date);
	var today = new Date();
	console.log(today + " subtract " + input);
	var diff = input.getTime() - today.getTime();

	var secs = diff / 1000;
	var minutes = secs/60;
	var hours = minutes / 60;
	var days = hours / 24;

  return Math.round(days) + " days, " + Math.round(hours % 24) + " hours, " +Math.round(minutes % 60)  + " minutes and " + Math.round(secs % 60) + " seconds left!";

}
