var acc = document.getElementsByClassName("accordion");
var i;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
 

var inputDOB = document.getElementById('DOB');
var inputwithdrawals = document.getElementById('withdrawals');
var inputnet = document.getElementById('net');
var inputcontributionroom = document.getElementById('contributionroom');


for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
