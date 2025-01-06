jQuery(function() {
  var $grid = jQuery('.grid').isotope({
      itemSelector: 'article'
  });
  jQuery('.filters-button-group').on('click', 'button', function() {
      var filterValue = jQuery(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
  });
});


$(window).bind("load", function() {
  $('#all').click();
});

console.log('JavaScript file is successfully executed.');