        // ===== Scroll to Top ==== 
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 500px
                $('.up').fadeIn(200);    // Fade in the arrow
                $('.down').fadeOut(200);
            } if ($(this).scrollTop() >= 90) {        // If page is scrolled more than 90px
                $('#logo').fadeIn(500);    // Fade in the arrow
            } else {
                $('.up').fadeOut(200);      // Else fade out the arrow
                $('.down').fadeIn(200); 
                $('#logo').fadeOut(200);  
                $('.box').fadeOut(200); 
            }
        });
        $(document).ready(function() {
            $('#arrow-up').click(function(event) {      // When arrow is clicked
                event.preventDefault();
                $('body,html').animate({
                    scrollTop : 0                       // Scroll to top of body
                }, 500);
                return false;
            });
            $("#arrow-down").click(function() {
                $('html, body').animate({
                    scrollTop: $("#findclass").offset().top
                }, 500);
            });
        });
        // ===== toggle =====
    $(document).ready(function(){
        $(".slide-toggle").click(function(){
            $(".box").animate({
                width: "toggle"
            });
        });
    });

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
