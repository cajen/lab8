function initMap() {
	L.mapquest.key = 'v86jpSqDfR5KhEikA7JYp3qnCYhwNJLm';


	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
	  });
  
	L.marker([32.88, -117.236]).addTo(map);
	// var map = L.mapquest.map('map', {
	// 	center : [32.88, -177.263],
	// 	layers : L.mapquest.tileLayer('map'), 
	// 	zoom : 12
	// 	// zoomControl : false
	// });

	// L.marker([32.88, -177.263]).addTo(map);
}