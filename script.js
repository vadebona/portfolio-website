$(document).ready(function(){
    // W3Schools Smooth Scrolling:
    $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

    // W3Schools Fullscreen nav:
    function openNav() {
        document.getElementById("nav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("nav").style.width = "0%";
    }
});
