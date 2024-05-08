

document.addEventListener('DOMContentLoaded', () => {


    $('.header-burger').on('click', function() {
  
      if($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $('.header-mobail-wrap').slideUp(500);
      }else {
        $(this).addClass('is-active');
        $('.header-mobail-wrap').slideDown(500);
      }
    });
  
  })


  $('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 150); 
});

$(window).scroll(function() { 
    let scrolled = $(window).scrollTop(); 

    if(scrolled > 600) { 
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});









