$(document).ready(function() {
  var team = $('.about-carousel');
  var portfolio = $('.portfolio-gallery');

  var carouselTeamSettings = {
    items:3,
    loop:true,
    margin:10,
    URLhashListener:true,
    navigation:true,
    navigationText: [
        "<i class='icon-chevron-left icon-white'><</i>",
        "<i class='icon-chevron-right icon-white'>></i>"
      ],
  }
  var carouselPortfolioSettings = {
    items:3,
    loop:true,
    margin:10,
    URLhashListener:true
  }
  team.owlCarousel(carouselTeamSettings);
  portfolio.owlCarousel(carouselPortfolioSettings);


//scroll section
  var scrollObj = {}
  scrollObj.about = $('#about').offset();
  // scrollObj.process = $('#process').offset();
  // scrollObj.team = $('#team').offset();
  scrollObj.footer = $('#footer').offset();

    var scroll_start = 0;
    var startchange = $('#about');
    var offset = startchange.offset();
     if (startchange.length){
      $(document).scroll(function() {
        // debugger;
         scroll_start = $(this).scrollTop();
        //  if(scroll_start > offset.top / 4) {
          //  $('nav').removeClass('navbar-expanded');
          // } else {
          //    $("nav").addClass('navbar-expanded');
          // }
          if(scroll_start >= scrollObj.about.top){
            $('nav li').removeClass('active');
            $('nav li:nth-child(2)').addClass('active');
          } else{
            $('nav li:nth-child(2)').removeClass('active');
          }
          //  if(scroll_start >= scrollObj.process.top){
          //   $('nav li').removeClass('active');
          //   $('nav li:nth-child(3)').addClass('active');
          // } else{
          //   $('nav li:nth-child(3)').removeClass('active');
          // }
           if(scroll_start >= scrollObj.footer.top){
            $('nav li').removeClass('active');
            $('nav li:nth-child(4)').addClass('active');
          } else{
            $('nav li:nth-child(4)').removeClass('active');
          }
      });
     }
     animationScroll();

     function animationScroll(){
      // Add scrollspy to <body>
      $('body').scrollspy({target: ".navbar", offset: 50});   

      // Add smooth scrolling on all links inside the navbar
      $(".page-scroll").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
      
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });
     }








});
