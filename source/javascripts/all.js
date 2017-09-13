//= require jquery
//= require bootstrap-sprockets
//= require_tree .

jQuery(document).ready(function(){
  jQuery('.slick ').slick({
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
})
