function blinker() {
	$('.header__title-element').fadeOut(500);
	$('.header__title-element').fadeIn(500);
}
setInterval(blinker(), 1000);


const submitBtn = document.getElementById('main__submit-date');

submitBtn.submit('click',function(e){

  e.preventDefault();

  const inputDate = document.getElementById('main__input-date');
	console.log(subtractDates(inputDate));

},false);

function subtractDates(inputDate){

	const currentDate = new Date();
  return currentDate - inputDate.UTC();

}