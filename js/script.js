// JavaScript Document
$(document).ready(function(){

$('#myTab a').click(function (e) {
 $('#info').show();
})

$('#myTab a[href="#projects"]').click(function (e) {
e.preventDefault();
 $('#info').hide();
})


});