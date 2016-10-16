$(document).ready(function() {

    $('#datepicker').datepicker();

     $('[data-toggle="tooltip"]').tooltip(); 

	$('#what').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#what-body").offset().top - 90},
        'slow');
    });


    $('#how').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#how-body").offset().top - 90},
        'slow');
    });

    $('#limits').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#limits-body").offset().top - 90},
        'slow');
    });

    $('#calc').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#calc-body").offset().top - 90},
        'slow');
    });
});