// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
};

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("openbtn").addEventListener('click', function() {
		document.getElementById("menu").style.width = "300px";
		document.getElementById("close").style.width = "100%";
	});
	document.getElementById("close").addEventListener('click', function() {
        	document.getElementById("menu").style.width = "0";
        	document.getElementById("close").style.width = "0";
    	});
	document.getElementById("closebutton").addEventListener('click', function() {
        	document.getElementById("menu").style.width = "0";
        	document.getElementById("close").style.width = "0";
    	});
 });