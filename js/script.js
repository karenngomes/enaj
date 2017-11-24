/* Background video */

var video = document.getElementById('video-iframe'); 
var player = new Vimeo.Player(video);

player.ready().then(function() { 
	player.setVolume(0); 
});

/* Counter */
var countDownDate = new Date("Nov 28, 2017 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in an element with id="counter"
	document.getElementById("counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter").innerHTML = "ESPIRADO!";
	}
}, 1000);

/* Cities buttons */

$(document).ready(function() {
	$("#mostrar-turismo").on("hide.bs.collapse", function() {
		$(".button-cities").html('Ver mais Cidades <span><i class="fa fa-angle-double-down" aria-hidden="true"></i></span>');
	});
	$("#mostrar-turismo").on("show.bs.collapse", function() {
		$(".button-cities").html('Ocultar Cidades <span><i class="fa fa-angle-double-up" aria-hidden="true"></i></span>');
	});
});

/* Changing news and pictures*/

$(function(){
	var $content = $('.tab1show, .tab2show, .tab3show, .tab4show').hide();
	$('.tab1show').show();

	$(".thumbnails-news .item").on("click", function(){

			$(".main-news img").attr({
				"src":"img/" + $(this).data('img') + ".jpg"					
			});

			$(".main-news a").attr({
				"href":$(this).data('link')	
			});

	        var $target = $('.' + this.id + 'show').show();
		  	$content.not($target).hide();
			/*if($(this).attr("id")=="tab1"){
		        $('.tab1show').show();
		        $('.tab2show, .tab3show, .tab4show').hide();
	        }
	        if($(this).attr("id")=="tab2"){
		        $('.tab2show').show();
		        $('.tab1show, .tab3show, .tab4show').hide();
	        }
	        if($(this).attr("id")=="tab3"){
		        $('.tab3show').show();
		        $('.tab1show, .tab2show, .tab4show').hide();
	        }
	        if($(this).attr("id")=="tab4"){
		        $('.tab4show').show();
		        $('.tab1show, .tab2show, .tab3show').hide();
	        }*/

		});
	
	$(".thumbnails-img .item").on("click", function(){

			$(".main-img img").attr({
				"src":"img/" + $(this).data('img') + ".jpg",	
			});

			$(".main-img a").attr({
				"href":$(this).data('link')	
			});

		});
});