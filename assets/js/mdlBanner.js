$(document).ready(function () {
    // Define or use default variables
    var mdlBannerUpper_text = mdlBannerUpper_text || "Default Upper Text";
    var mdlBannerBottom_text = mdlBannerBottom_text || "Default Bottom Text";
    var bottomMdlBannerLink_text = bottomMdlBannerLink_text || "Learn More";
    var bottomMdlBannerLink_Url = bottomMdlBannerLink_Url || "#";
    var BannerPic = BannerPic || "url('./assets/img/October7.svg')";
    var BannerPicMobile = BannerPicMobile || "url('./assets/img/October7.svg')";
    var ForwordCounter = ForwordCounter !== undefined ? ForwordCounter : true;
    var countDownDate = countDownDate || new Date("Oct 7, 2023 06:30:00").getTime();

    // Debugging logs
    console.log("mdlBannerUpper_text:", mdlBannerUpper_text);
    console.log("mdlBannerBottom_text:", mdlBannerBottom_text);
    console.log("bottomMdlBannerLink_text:", bottomMdlBannerLink_text);
    console.log("bottomMdlBannerLink_Url:", bottomMdlBannerLink_Url);
    console.log("BannerPic:", BannerPic);
    console.log("BannerPicMobile:", BannerPicMobile);
    console.log("ForwordCounter:", ForwordCounter);
    console.log("countDownDate:", new Date(countDownDate));

    // Update banner elements
    if ($(".mdlBannerUpper").length) {
        $(".mdlBannerUpper").text(mdlBannerUpper_text);
    }
    if ($(".mdlBannerBottom").length) {
        $(".mdlBannerBottom").text(mdlBannerBottom_text);
    }
    if ($(".bottomMdlBannerLink").length) {
        $(".bottomMdlBannerLink")
            .text(bottomMdlBannerLink_text)
            .attr("href", bottomMdlBannerLink_Url);
    }
    if ($(".mdlBanner").length) {
        $(".mdlBanner").css("background", !isMobile() ? BannerPic : BannerPicMobile);
    }

    // Mobile detection function
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Countdown timer
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = !ForwordCounter ? countDownDate - now : now - countDownDate;

        if (!ForwordCounter && distance < 0) {
            $(".daysUp").text("0");
            $(".hoursUp").text("0");
            $(".minutesUp").text("0");
            $(".secondsUp").text("0");
            clearInterval(x);
        } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

            $(".daysUp").text(days.length == 1 ? "0" + days : days);
            $(".hoursUp").text(hours.length == 1 ? "0" + hours : hours);
            $(".minutesUp").text(minutes.length == 1 ? "0" + minutes : minutes);
            $(".secondsUp").text(seconds.length == 1 ? "0" + seconds : seconds);
        }
    }, 1000);
});
