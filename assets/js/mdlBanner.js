$(document).ready(function(){
  
	$(".mdlBannerUpper").text(mdlBannerUpper_text);
    $(".mdlBannerBottom").text(mdlBannerBottom_text);
    $(".bottomMdlBannerLink").text(bottomMdlBannerLink_text).attr("href", bottomMdlBannerLink_Url);   
	$(".mdlBanner").css("background", !isMobile() ? BannerPic : BannerPicMobile);
	
// Update the count down every 1 second
	var x = setInterval(function() {

		  // Get today's date and time
		  var now = new Date().getTime();

		  // Find the distance between now and the count down date
		  var distance = !ForwordCounter? countDownDate - now : now - countDownDate ;
		 if(!ForwordCounter && distance < 0 ){
		  $(".daysUp").text('0');
		  $(".hoursUp").text('0');
		  $(".minutesUp").text('0');
		  $(".secondsUp").text('0'); 
		  clearInterval(x);
		 }
		 else{
		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();
		  
		  
		  $(".daysUp").text(days.length == 1 ? ("0" + days) : days);
		  $(".hoursUp").text(hours.length == 1 ? ("0" + hours) : hours);
		  $(".minutesUp").text(minutes.length == 1 ? ("0" + minutes) : minutes);
		  $(".secondsUp").text(seconds.length == 1 ? ("0" + seconds) : seconds);
		 }
		  

		  // If the count down is finished, write some text
		  //if (distance < 0 && expirationText != '') {			
		//	$(".leftMdlBanner").html(expirationText);
		 // }
	}, 1000);

});