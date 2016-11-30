function globalJS($scope = null)
{

  $('.ui.dropdown')
  .dropdown()
  ;

  $('.fixed.menu').transition('fade in').show();

  $('.toc.item').click(function(){
    $('.ui.sidebar')
    .sidebar('toggle')
    ;
  });
}
