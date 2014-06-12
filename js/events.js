// JavaScript Document
$(document).ready(function () {
	// get the list items that are direct children of the list
  

var nav = $('#nav ul'),


$("nav").find('> ul').bind("mouseenter")
    function() {
	var that = (this),
	$('li') = (that);

        $(this).find('> ul').slideDown(100);
    },
    function() {
        $(this).find('> ul').slideUp(100);
    }
);

$(subitems).find('> li').hover(
    function() {
        $(this).find('> ul').slideDown(100);
    },
    function() {
        $(this).find('> ul').slideUp(100);
    }
);	
	
	
});

