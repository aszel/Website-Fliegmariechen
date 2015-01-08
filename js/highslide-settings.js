//<![CDATA[
hs.graphicsDir = 'highslide/graphics/';
hs.transitions = ['expand', 'crossfade'];
hs.restoreCursor = null;
hs.lang.restoreTitle = 'Klick für n&auml;chstes Bild';
hs.captionOverlay.position = 'above';

// Add the slideshow providing the controlbar and the thumbstrip
hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 5000,
	repeat: true,
	useControls: false, // true
	//overlayOptions: {
	//	position: 'top right',
	//	offsetY: 0,
	//	offsetX: 6
	//},
	thumbstrip: {
		position: 'bottom',
		mode: 'horizontal',
		relativeTo: 'expander',
		offsetY: 80,
		width: '420px' // siehe inPageOptions width
	}
});

// Optionen
var inPageOptions = {
	//slideshowGroup: 'group1',
	outlineType: null,
	allowSizeReduction: true, //false
	wrapperClassName: 'in-page controls-in-heading',
	useBox: true,
	width: 410, // Gesamtbreite -> highslide.css #gallery_area anpassen
	height: 290, // Gesamthöhe -> highslide.css #gallery_area anpassen
	targetX: 'gallery_area 10px',
	targetY: 'gallery_area 10px',
	captionEval: 'this.thumb.alt',
	numberPosition: '' //caption
}

// Open the first thumb on page load
hs.addEventListener(window, 'load', function() {
	document.getElementById('thumb1').onclick();
});

// Cancel the default action for image click and do next instead
hs.Expander.prototype.onImageClick = function() {
	if (/in-page/.test(this.wrapper.className))	return hs.next();
}

// Under no circumstances should the static popup be closed
hs.Expander.prototype.onBeforeClose = function() {
	if (/in-page/.test(this.wrapper.className))	return false;
}
// ... nor dragged
hs.Expander.prototype.onDrag = function() {
	if (/in-page/.test(this.wrapper.className))	return false;
}

// Keep the position after window resize
hs.addEventListener(window, 'resize', function() {
	var i, exp;
	hs.getPageSize();

	for (i = 0; i < hs.expanders.length; i++) {
		exp = hs.expanders[i];
		if (exp) {
			var x = exp.x,
				y = exp.y;

			// get new thumb positions
			exp.tpos = hs.getPosition(exp.el);
			x.calcThumb();
			y.calcThumb();

			// calculate new popup position
		 	x.pos = x.tpos - x.cb + x.tb;
			x.scroll = hs.page.scrollLeft;
			x.clientSize = hs.page.width;
			y.pos = y.tpos - y.cb + y.tb;
			y.scroll = hs.page.scrollTop;
			y.clientSize = hs.page.height;
			exp.justify(x, true);
			exp.justify(y, true);

			// set new left and top to wrapper and outline
			exp.moveTo(x.pos, y.pos);
		}
	}
});
//]]>