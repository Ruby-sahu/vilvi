$(window).scroll(function () {
    if ($(window).scrollTop() > 0){
        $("header").addClass('sticky');
    }else{
        $("header").removeClass('sticky');
    }
});


/***** Banner Carousel ***** */
 // Owl carousel 1
 $( '.owl-carousel-first' ).owlCarousel({
    items: 1,
    loop:true,
    nav: false,
    dots: true,
    margin: 10,
    autoHeight:true,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
        0:{
          items: 1,
           autoHeight:true,
        },
        480:{
          items: 1,
           autoHeight:true,
        },
        992:{
          items: 1,
          autoHeight:true,
        }
    }
});