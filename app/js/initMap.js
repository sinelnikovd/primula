function initMap() {
	var style = [
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e9e9e9"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 29
			},
			{
				"weight": 0.2
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 18
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			},
			{
				"lightness": 21
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#dedede"
			},
			{
				"lightness": 21
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#ffffff"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"saturation": 36
			},
			{
				"color": "#333333"
			},
			{
				"lightness": 40
			}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f2f2f2"
			},
			{
				"lightness": 19
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#fefefe"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#fefefe"
			},
			{
				"lightness": 17
			},
			{
				"weight": 1.2
			}
		]
	}
];





	var map = new google.maps.Map(document.getElementById('mapwork'), {
		center: {lat: 55.610423, lng: 38.017747},
		scrollwheel: false,
		draggable: false,
		zoom: 9,
	});

	map.setOptions({styles: style});


	var infoBubble1 = new InfoBubble({
		map: map,
		content: '<div class="map__info">1Калужская область д. Иваново</div>',
		shadowStyle: 1,
		padding: 10,
		backgroundColor: '#0ab59f',
		borderRadius: 0,
		borderWidth: 0,
		borderColor: '#000',
		disableAutoPan: true,
		hideCloseButton: true,
		backgroundClassName: 'infobubble',
		arrowPosition: 50,
		arrowSize: 10,
		arrowStyle: 0
	});


	var marker1 = new google.maps.Marker({
		map: map,
		position: {lat: 55.493902, lng: 37.174546},
		icon: { url: 'img/map-marker.png', size: new google.maps.Size(44, 72)}
	});


	marker1.addListener('click', function() {
			infoBubble1.open(map, marker1);
	});


	var infoBubble2 = new InfoBubble({
		map: map,
		content: '<div class="map__info">2Калужская область д. Иваново</div>',
		shadowStyle: 1,
		padding: 10,
		backgroundColor: '#0ab59f',
		borderRadius: 0,
		borderWidth: 0,
		borderColor: '#000',
		disableAutoPan: true,
		hideCloseButton: true,
		backgroundClassName: 'infobubble',
		arrowPosition: 50,
		arrowSize: 10,
		arrowStyle: 0
	});


	var marker2 = new google.maps.Marker({
		map: map,
		position: {lat: 55.493902, lng: 37.889215},
		icon: { url: 'img/map-marker.png', size: new google.maps.Size(44, 72)}
	});


	marker2.addListener('click', function() {
			infoBubble2.open(map, marker2);
	});


	var infoBubble3 = new InfoBubble({
		map: map,
		content: '<div class="map__info">3Калужская область д. Иваново</div>',
		shadowStyle: 1,
		padding: 10,
		backgroundColor: '#0ab59f',
		borderRadius: 0,
		borderWidth: 0,
		borderColor: '#000',
		disableAutoPan: true,
		hideCloseButton: true,
		backgroundClassName: 'infobubble',
		arrowPosition: 50,
		arrowSize: 10,
		arrowStyle: 0
	});


	var marker3 = new google.maps.Marker({
		map: map,
		position: {lat: 55.649187, lng: 38.790094},
		icon: { url: 'img/map-marker.png', size: new google.maps.Size(44, 72)}
	});


	marker3.addListener('click', function() {
			infoBubble3.open(map, marker3);
	});




	

	map.addListener('click', function() {
		if(infoBubble1.isOpen()){
			infoBubble1.close();
		}
		if(infoBubble2.isOpen()){
			infoBubble2.close();
		}
		if(infoBubble3.isOpen()){
			infoBubble3.close();
		}
	});

	var contactMap = new google.maps.Map(document.getElementById('roundmap'), {
		center: {lat: 55.610423, lng: 38.017747},
		scrollwheel: false,
		draggable: false,
		zoom: 9,
	});

	contactMap.setOptions({styles: style});

	var contactInfoBubble = new InfoBubble({
		map: contactMap,
		content: '<div class="map__info">Калужская область д. Иваново</div>',
		shadowStyle: 1,
		padding: 10,
		backgroundColor: '#0ab59f',
		borderRadius: 0,
		borderWidth: 0,
		borderColor: '#000',
		disableAutoPan: true,
		hideCloseButton: true,
		backgroundClassName: 'infobubble',
		arrowPosition: 50,
		arrowSize: 10,
		arrowStyle: 0
	});


	var contactMarker = new google.maps.Marker({
		map: contactMap,
		position: {lat: 55.610423, lng: 38.017747},
		icon: { url: 'img/map-marker.png', size: new google.maps.Size(44, 72)}
	});


	contactMarker.addListener('click', function() {
			contactInfoBubble.open(contactMap, contactMarker);
	});


}