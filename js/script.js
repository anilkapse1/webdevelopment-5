$(document).ready(function(){
  var logo = $(".logo");
  $(logo).click(function() {
    $('html, body').animate({
      scrollTop: 780
    }, 800);
    return false;
  });

  $(".dash").click(function(){
    $("#dashboard").show();
    $("#webdesign").hide();
    $(".dash").addClass('active');
    $(".dash").removeClass('inactive');
    $(".web").addClass('inactive');
  });

  $(".web").click(function(){
    $("#dashboard").hide();
    $("#webdesign").show();
    $(".dash").addClass('inactive');
    $(".web").removeClass('inactive');
    $(".web").addClass('active');
  });

$('.myslider').slick({
infinite: true,
// centerMode: true,
focusOnSelect: true,
speed: 500,
slidesToShow: 4,
slidesToScroll: 1,
// autoplay:false,
autoplay:true,
responsive: [
  {
    breakpoint: 2500,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      // centerMode: true,
      infinite: true

    }
  },
  {
    breakpoint: 1286,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true

    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true

    }
  },

  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});
  $('.myslider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(".slick-slide img ").removeClass("opacity");
    $(".slick-current img").addClass("opacity");

    $(".slick-slide .overlay").removeClass("hoveroverlay");
    $(".slick-current .overlay").addClass("hoveroverlay");
  });

  // team member end


// code for testimonial start
$('.testimonialmove').slick({
 slidesToShow: 5,
 slidesToScroll: 5,
 arrows: false,
 // fade: true,
 asNavFor: '.slidefortestimonial',
 focusOnSelect: true
});


$('.slidefortestimonial').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  //asNavFor: '.slick-dots',
  dots:false,
  autoplay:true,
  // autoplay:false,
  autoplaySpeed: 2000,
  focusOnSelect: true
 });

   $(".slick-track .slick-slide[data-slick-index='"+0+"']").addClass("sa");

   $('.slidefortestimonial').on('afterChange', function(event, slick, currentSlide, nextSlide){
     $(".slick-track .slick-slide").removeClass("sa");
     $(".slick-track .slick-slide[data-slick-index='"+currentSlide+"']").addClass("sa");
  });
// code for testimonial end

});
