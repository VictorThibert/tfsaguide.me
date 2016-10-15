$(document).ready(function() {

     $('[data-toggle="tooltip"]').tooltip(); 

	$('#what').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#what-body").offset().top - 80},
        'slow');
    });


    $('#how').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#how-body").offset().top - 80},
        'slow');
    });

    $('#limits').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#limits-body").offset().top - 80},
        'slow');
    });
});