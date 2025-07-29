var theSelect,theIframe;
var today = new Date(),

number_of_day = today.getDay();
$(document).ready(function() {
//var today = new Date();
//var n = today.getDay();
theSelect = document.getElementById('location');
theIframe = document.getElementById('myIframe');
theUrl = theSelect.options[number_of_day].value;
theIframe.src = theUrl;
});
function setIframeSource() 
{
var theUrl;

if ( theSelect.selectedIndex > 0) {
	theUrl = theSelect.options[theSelect.selectedIndex].value;
} else {
	theUrl = theSelect.options[0].value;
}
theIframe.src = theUrl;
}