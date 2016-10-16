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
var icarray = carray.reverse() //for indexing help

var inputDOB = document.getElementById('DOB');
var inputwithdrawals = document.getElementById('withdrawals');
var inputnet = document.getElementById('net');
var inputnet2 = document.getElementById('net2');
var inputcontributionroom = document.getElementById('contributionroom');

var contribution = 0;
var cwithdrawals = 0;
var cnet = 0;
var cnet2 = 0;

inputwithdrawals.onkeyup = function(){
    cwithdrawals = inputwithdrawals.value;
    updateContributionRoom();
}

inputnet.onkeyup = function(){
    cnet = inputnet.value;
    updateContributionRoom();
}

inputnet2.onkeyup = function(){
    cnet2 =inputnet2.value;
    updateContributionRoom();
}
function updateDate(e){
    contribution = 0;

    selectedyyyy = parseInt(e.slice(0,4));
    selectedmm = parseInt(e.slice(5,7));
    selecteddd = parseInt(e.slice(8,10));

    var year18 = selectedyyyy + 18;
    var contributionYears = yyyy - year18;
    if (contributionYears >= carray.length){
        contributionYears = carray.length - 1;
    }


    for(var i = 0; i <= contributionYears ; i++){
        contribution += icarray[i]
    }


    updateContributionRoom();
    
}

function updateContributionRoom(){
    console.log(contribution);
    inputcontributionroom.value = contribution - (cnet - cnet2) -cwithdrawals;
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

