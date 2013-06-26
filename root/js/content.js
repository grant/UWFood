$(function() {
	var wid = $(window).width();
	var hei = $(window).height();

	var sideOffset = 100;

	$('.sidebar').css('background-size', (wid - sideOffset) + 'px 100%');
	$('.top').css('background-size', (wid) + 'px auto');
	$('.top').css('height', (151*wid)/320);
	$('.slide').css('background-size', (wid) + 'px auto');
	$('.slide').css('height', (140*wid)/320);

	var snapper = new Snap({
		element: document.getElementById('center'),
		dragger: null,
		disable: 'right',
		addBodyClasses: true,
		hyperextensible: true,
		resistance: 0.5,
		flickThreshold: 50,
		transitionSpeed: 0.3,
		easing: 'ease',
		maxPosition: (wid - sideOffset),
		minPosition: -(wid - sideOffset),
		tapToClose: true,
		touchToDrag: true,
		slideIntent: 40,
		minDragDistance: 5
	});
});