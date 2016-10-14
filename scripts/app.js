$(document).ready(function() {

	$('#what').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#what-body").offset().top - 100},
        'slow');
    });


    $('#how').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#how-body").offset().top - 100},
        'slow');
    });

    $('#limits').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#limits-body").offset().top - 100},
        'slow');
    });
});