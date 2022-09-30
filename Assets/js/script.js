var schoolList = document.getElementById("list");
var getSchools = document.getElementById("btn-location")
var recent = document.getElementById('recent');

var last = localStorage.getItem('schoolList');

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
   console.log("hey the button works, now we wait for the API key");

    // var requestUrl = 'api key when we get it ?per_page=4';
    // fetch(requestUrl)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //     for (var i = 0; i < data.length; i++) {
    //       var schoolName = document.createElement('h3');
    //       var summary = document.createElement('p')
    //       var rating = document.createElement('h5');
    //       schoolName.textContent = "data[i].name" ;
    //       summary.textContent = "data[i].school-summary" ;
    //       rating.textContent = "data[i].rating" ;
    //       schoolList.append(schoolName);
    //       schoolList.append(summary);
    //       schoolList.append(rating);
    //     }
    //   });
  }
  getSchools.addEventListener('click', getApi);

  var schoolList = document.getElementById("list");
var getSchools = document.getElementById("btn-location")

function getApi() {
   console.log("");

    // var requestUrl = 'pk.eyJ1Ijoic2FjaGl0ayIsImEiOiJjbDhqbGVrcHgwN3ZuM29vMnpjdnIxczh3In0.VJfjX1VRozeJ9uHHCWIbJw';
    // fetch(requestUrl)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //     for (var i = 0; i < data.length; i++) {
    //       var  = document.createElement('h3');
    //       var summary = document.createElement('p')
    //       var rating = document.createElement('h5');
    //       schoolName.textContent = "data[i].name" ;
    //       summary.textContent = "data[i].school-summary" ;
    //       rating.textContent = "data[i].rating" ;
    //       schoolList.append(schoolName);
    //       schoolList.append(summary);
    //       schoolList.append(rating);
    //     }
    //   });
  }
  getSchools.addEventListener('click', getApi);


function store() {
    localStorage.setItem('schoolList', last);
}

getSchools.addEventListener('click', store);
