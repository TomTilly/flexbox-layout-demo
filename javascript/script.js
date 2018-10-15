$(function() {
      $('.menuToggle').on('click',function(e) {
      	e.preventDefault();
        $('nav ul').toggleClass('open');
      });
    });