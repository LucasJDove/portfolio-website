$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top;
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom + 50 < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(10000,1);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

