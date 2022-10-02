var schoolList = document.getElementById("list");
var getSchools = document.getElementById("btn-location")
var recent = document.getElementById('recent');
var gsAPI = "Ycy8UJFQDy6FqyYrVm8M24nEp005eWdl9B2W0aSm"
var last = localStorage.getItem('schoolList');

// window.navigator.geolocation.getCurrentPosition(position => {
//   console.log(position.coords.longitude); 
//   console.log(position.coords.latitude);
//   const lat = position.coords.latitude;
//   const lng = position.coords.longitude;

// });





(function () {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });
})();

recent.textContent = last;
 

function getApi() {
console.log("okay");
navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.longitude); 
  console.log(position.coords.latitude);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
var requestUrl = 'https://gs-api.greatschools.org/nearby-schools?lat=' + lat + '&lon=' + lng + '&limit=5&distance=5&';

    fetch(requestUrl, {
      method: "GET",
      headers: {
        "x-api-key": gsAPI
    }
    })
 
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var{schools}= data
        for (var i = 0; i < schools.length; i++) {
          var schoolBox =document.createElement('div')
          var schoolName = document.createElement('p');
          var summary = document.createElement('h5');
          var rating = document.createElement('h5');
          schoolBox.classList.add("title", "tile", "is-ancestor", "box");
          schoolBox.setAttribute('style', 'border-style: solid; border-color: var(--light-blue); border-width: 5px; flex-direction: column;')
          schoolName.textContent = schools[i].name ;
          summary.textContent = schools[i]["school-summary"] ;
          rating.textContent = "This school recieved a/an "+ schools[i].rating + "/10 rating" ;
          schoolList.append(schoolBox);
          schoolBox.append(schoolName);
          schoolBox.append(summary);
          schoolBox.append(rating);
          console.log(schools[i].name, schools[i].school-summary, schools[i].rating );
        }
        mapboxgl.accessToken = 'pk.eyJ1IjoicnlvdW5nZ3JlZW4iLCJhIjoiY2w4bWZ6cDByMDVpdzQwcndic2xyaThqeiJ9.eDGZtS6hg6TDGyU8CUWxnQ';
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 12
        })
        marker = new mapboxgl.Marker()
        .setLngLat([data.schools[0].lon, data.schools[0].lat])
        .addTo(map);

        marker2 = new mapboxgl.Marker()
        .setLngLat([data.schools[1].lon, data.schools[1].lat])
        .addTo(map);

        marker3 = new mapboxgl.Marker()
        .setLngLat([data.schools[2].lon, data.schools[2].lat])
        .addTo(map);

        marker4 = new mapboxgl.Marker()
        .setLngLat([data.schools[3].lon, data.schools[3].lat])
        .addTo(map);

        marker5 = new mapboxgl.Marker()
        .setLngLat([data.schools[4].lon, data.schools[4].lat])
        .addTo(map);
      })
      });
  }


  getSchools.addEventListener('click', getApi);

var schoolList = document.getElementById("list");
var getSchools = document.getElementById("btn-location")

function store() {
    localStorage.setItem('schoolList', last);
}

getSchools.addEventListener('click', store);
