hs.graphicsDir = 'highslide/graphics/';
	hs.align = 'center';
	hs.transitions = ['expand', 'crossfade'];
	hs.fadeInOut = true;
	hs.outlineType = 'glossy-dark';
	hs.wrapperClassName = 'dark';
	hs.captionEval = 'this.a.title';
	hs.numberPosition = 'caption';
	hs.useBox = true;
	hs.width = 600;
	hs.height = 400;
	//hs.dimmingOpacity = 0.8;

	// Add the slideshow providing the controlbar and the thumbstrip
	hs.addSlideshow({
		//slideshowGroup: 'group1',
		interval: 5000,
		repeat: false,
		useControls: true,
		fixedControls: 'fit',
		overlayOptions: {
			position: 'bottom center',
			opacity: .75,
			hideOnMouseOut: true
		},
		thumbstrip: {
			position: 'above', // bottom
			mode: 'horizontal',
			relativeTo: 'expander'
		}
	});

	// Configurations for first gallery
	var miniGalleryOptions1 = { thumbnailId: 'thumb1', slideshowGroup: 'group1'}
	
	// Configurations for second gallery
	var miniGalleryOptions2 = { thumbnailId: 'thumb2', slideshowGroup: 'group2'}

	// Configurations for third gallery..
	var miniGalleryOptions3 = { thumbnailId: 'thumb3', slideshowGroup: 'group3'}
	var miniGalleryOptions4 = { thumbnailId: 'thumb4', slideshowGroup: 'group4'}
	var miniGalleryOptions5 = { thumbnailId: 'thumb5', slideshowGroup: 'group5'}
