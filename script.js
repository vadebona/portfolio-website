// W3Schools Fullscreen nav: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay
function openNav() {
    document.getElementById("nav-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav-menu").style.width = "100%";
}

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

});


