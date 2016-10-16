var acc = document.getElementsByClassName("accordion");
var i;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

var selecteddd = 01;
var selectedmm = 01; 
var selectedyyyy = 2100;

var carray = [5000, 5000, 5000, 5000, 5500, 5500, 10000, 5500];

var inputDOB = document.getElementById('DOB');
var inputwithdrawals = document.getElementById('withdrawals');
var inputnet = document.getElementById('net');
var inputcontributionroom = document.getElementById('contributionroom');

var contribution = 0;
inputwithdrawals.onkeyup = function(){
    inputcontributionroom.value = contribution;
}

inputnet.onkeyup = function(){
    inputcontributionroom.value = contribution;
}

function updateDate(e){
 
    selectedyyyy = parseInt(e.slice(0,4));
    selectedmm = parseInt(e.slice(5,7));
    selecteddd = parseInt(e.slice(8,10));
    
}

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}


$(document).ready(function() {

    $('#datepicker').datepicker({
        autoclose: true,
        startView: 2
        })
    .on('hide', function(e) {
        updateDate(inputDOB.value);
    });

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

    $('#faq').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#faq-body").offset().top - 90},
        'slow');
    });

    $('#sources').click(function(event) {
      event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#sources-body").offset().top - 90},
        'slow');
    });
});

