// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTTl046sFCnjj3T3Yx3o449cNgzn9IvTY&libraries=visualization"> */}
let map, heatmap, directionsRenderer, directionsService, orignPoint, destinationPoint, bikeLayer, year, month, mode;

var modes = ["heatmap", "topNroutes"]

function initMap() {
  console.log("map")
  showHeatMap();
  
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();
  bikeLayer = new google.maps.BicyclingLayer();

  document
    .getElementById("showTable")
    .addEventListener("click", displayTable);
  document
    .getElementById("show-heatmap")
    .addEventListener("click", showHeatMap);
  document
    .getElementById("toggle-BikeLane")
    .addEventListener("click", toggleBikeLane);
  document
    .getElementById("toggle-activityBar")
    .addEventListener("click", toggleActivityBar);
  document
    .getElementById("show")
    .addEventListener("click", show);
  document
    .getElementById("TopRoutes")
    .addEventListener("click", TopRoutes);
  document
    .getElementById("demandForecast")
    .addEventListener("click", demandForecast)
  document
    .getElementById("forecastshow")
    .addEventListener("click", forecastshow)
  document
    .getElementById("cluster")
    .addEventListener("click", showCluster)
  
}

function showHeatMap() {
  var container = document.getElementById('topNcontainer');
  var tableexist = document.querySelector("table");
  container.innerHTML = ""
  document.getElementById("currentMode").innerHTML = "Current in HeatMap";
  mode = modes[0];
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 49.28275, lng: -123.12078 },
    styles: [ 
      { 
        "featureType": "poi", 
        "stylers": [ 
          { "visibility": "off" } 
        ] 
      } 
    ] 
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    gradient: getgradient(),
  });
}


// function toggleHeatmap() {
//   console.log("change to heatmap")
//   directionsRenderer.setMap(null);
//   map.set("zoom", 13)
//   heatmap.setMap(heatmap.getMap() ? null : map);
// }

// function togglepopularRoutes(orignPoint, destinationpoint) {
//   console.log("change to togglepopularRoutes")
//   console.log(orignPoint)
//   console.log(destinationpoint)
//   heatmap.setMap(null);
//   directionsRenderer.setMap(map);
//   calculateAndDisplayRoute(directionsService, directionsRenderer,  orignPoint, destinationpoint);
 
//   document.getElementById("mode").addEventListener("change", () => {
//     calculateAndDisplayRoute(directionsService, directionsRenderer, orignPoint, destinationpoint);
//   });
// }


function toggleBikeLane() {
  console.log("change to heatmap")
  bikeLayer.setMap(bikeLayer.getMap() ? null : map);
}

function getgradient() {
  return [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];
}


function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

  
// Heatmap data: 500 Points
function getPoints() {
  return [
    // {labels: "ABC", location: new google.maps.LatLng(49.262487, -123.114397), weight: 12},
    // {labels: "ABC", location: new google.maps.LatLng(49.285871, -123.12105), weight: 10},
    {labels: "ABC", location: new google.maps.LatLng(49.274566, -123.121817), weight: 12},
    {location: new google.maps.LatLng(49.279764, -123.110154), weight: 0},
    {location: new google.maps.LatLng(49.266314, -123.116011), weight: 22},
    {location: new google.maps.LatLng(49.260599, -123.113504), weight: 5},
    {location: new google.maps.LatLng(49.264215, -123.117772), weight: 7},
    {location: new google.maps.LatLng(49.270877, -123.115103), weight: 9},
    {location: new google.maps.LatLng(49.26893, -123.11813), weight: 10},
    {location: new google.maps.LatLng(49.271721, -123.104207), weight: 23},
    {location: new google.maps.LatLng(49.282214, -123.114101), weight: 25},
    {location: new google.maps.LatLng(49.287214, -123.11287), weight: 9},
    {location: new google.maps.LatLng(49.282409, -123.118541), weight: 12},
    {location: new google.maps.LatLng(49.287097, -123.118551), weight: 8},
  ];
}



function fetchData() {
  return [
{location: new google.maps.LatLng(49.269361, -123.13782), weight: 41},
{location: new google.maps.LatLng(49.263507, -123.148097), weight: 5},
{location: new google.maps.LatLng(49.2653, -123.13811), weight: 3},
{location: new google.maps.LatLng(49.262598, -123.138921), weight: 8},
{location: new google.maps.LatLng(49.25894, -123.139272), weight: 5},
{location: new google.maps.LatLng(49.258763, -123.115392), weight: 6},
{location: new google.maps.LatLng(49.266724, -123.104824), weight: 9},
{location: new google.maps.LatLng(49.262141, -123.101961), weight: 8},
{location: new google.maps.LatLng(49.268269, -123.147885), weight: 9},
{location: new google.maps.LatLng(49.275717, -123.142564), weight: 2},
{location: new google.maps.LatLng(49.276436, -123.11877), weight: 11},
{location: new google.maps.LatLng(49.277844, -123.120942), weight: 6},
{location: new google.maps.LatLng(49.263088, -123.12415), weight: 7},
{location: new google.maps.LatLng(49.265089, -123.119425), weight: 15},
{location: new google.maps.LatLng(49.27821, -123.136972), weight: 8},
{location: new google.maps.LatLng(49.281301, -123.139108), weight: 24},
{location: new google.maps.LatLng(49.28329, -123.137034), weight: 9},
{location: new google.maps.LatLng(49.28026, -123.135244), weight: 9},
  ];
}

function updateHeadMap( data ) {
  heatmap.set("data", data);
}



function getMonthData(month) {
  console.log("get month Data")
  return fetch_from_server(0, month, 0);
}


function fetch_from_server(year, month, day) {
  data = [[
          { location: new google.maps.LatLng(49.273471, -123.118016), weight: 23 },
          {location: new google.maps.LatLng(49.282758, -123.122092), weight: 22},
          {location: new google.maps.LatLng(49.286042, -123.113176), weight: 11},
          {location: new google.maps.LatLng(49.28602, -123.116624), weight: 45},
          {location: new google.maps.LatLng(49.279739, -123.116251), weight: 7},
          {location: new google.maps.LatLng(49.277483, -123.114279), weight: 12},
          {location: new google.maps.LatLng(49.275679, -123.116963), weight: 8},
          ], [
          {location: new google.maps.LatLng(49.288444, -123.139203), weight: 15 },
          {location: new google.maps.LatLng(49.291285, -123.13526), weight: 12},
          {location: new google.maps.LatLng(49.289124, -123.12196), weight: 4},
          {location: new google.maps.LatLng(49.273663, -123.127075), weight: 11},
          {location: new google.maps.LatLng(49.275295, -123.132585), weight: 21},
          {location: new google.maps.LatLng(49.28972, -123.144028), weight: 12 },
         ],
          [{location: new google.maps.LatLng(49.263088, -123.12415), weight: 7},
          {location: new google.maps.LatLng(49.265089, -123.119425), weight: 15},
          {location: new google.maps.LatLng(49.27821, -123.136972), weight: 8},
          {location: new google.maps.LatLng(49.28117, -123.104419), weight: 12},
          { location: new google.maps.LatLng(49.283227, -123.120523), weight: 25 },
          ], [
          {location: new google.maps.LatLng(49.263649, -123.152421), weight: 8},
          {location: new google.maps.LatLng(49.297933, -123.130758), weight: 29},
          {location: new google.maps.LatLng(49.258819, -123.131317), weight: 4},
          {location: new google.maps.LatLng(49.277595, -123.09583), weight: 7},
          {location: new google.maps.LatLng(49.280284, -123.097052), weight: 5},
          {location: new google.maps.LatLng(49.280332, -123.070068), weight: 2},  
          ], [
          {location: new google.maps.LatLng(49.258864, -123.14353), weight: 2},
          {location: new google.maps.LatLng(49.262822, -123.14338), weight: 6},
          {location: new google.maps.LatLng(49.263635, -123.099236), weight: 6},
          {location: new google.maps.LatLng(49.28763, -123.127245), weight: 9},
          {location: new google.maps.LatLng(49.263649, -123.152421), weight: 8},
        ]]
  return data[month]
}

function changemonth() {
  month = document.getElementById("month-range").value
  document.getElementById("month_val").innerHTML = month;
  console.log("month")
  console.log(month)
  let montdata = getMonthData(month)
  console.log("fine")
  updateHeadMap(montdata)
}

function changeData2()
{
  console.log("Change")
  console.log([
{location: new google.maps.LatLng(49.273471, -123.118016), weight: 23},
{location: new google.maps.LatLng(49.282758, -123.122092), weight: 22},
{location: new google.maps.LatLng(49.286042, -123.113176), weight: 11},
{location: new google.maps.LatLng(49.28602, -123.116624), weight: 45},
{location: new google.maps.LatLng(49.279739, -123.116251), weight: 7},
{location: new google.maps.LatLng(49.277483, -123.114279), weight: 12},
{location: new google.maps.LatLng(49.275679, -123.116963), weight: 8},
{location: new google.maps.LatLng(49.287528, -123.142139), weight: 31},
{location: new google.maps.LatLng(49.282759, -123.106955), weight: 17},
{location: new google.maps.LatLng(49.28803, -123.142135), weight: 9},
{location: new google.maps.LatLng(49.288444, -123.139203), weight: 15},
{location: new google.maps.LatLng(49.291285, -123.13526), weight: 12},
])
  
  heatmap.set("gradient", station_data);
}


function calculateAndDisplayRoute(directionsService, directionsRenderer, originPoint, destinationPoint) {
  const selectedMode = document.getElementById("mode").value;

  directionsService
    .route({
      origin: {lat: originPoint[0], lng: originPoint[1]},
      destination: {lat: destinationPoint[0], lng: destinationPoint[1]}, 
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}


// Show route table 
// 
var orderArray = [
    ["110th & Cambie", "49.262487", "-123.114397", "Yaletown-Roundhouse Station", "49.274566", "-123.121817"],
    ["Olympic Village Station	", "49.266314", "-123.116011", "6th & Carolina", "49.265213", "-123.090785"],
    ["Bute & Barclay", "49.284893", "-123.128685", "Georgia & Homer", "49.280787", "-123.115271"]
];
    
var orderArrayHeader = ["Popular Checkout Station (Blue lag)","Lat","Lon","Popular Return Station (Red lag)", "lat", "lon"];


function displayTable() {
  var container = document.getElementById('container');
  var tableexist = document.querySelector("table");
  if (!tableexist) {
    // get handle on div
    
    // create table element
    var table = document.createElement('table');
    table.classList.add("table")
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');

    table.appendChild(thead);
    
    for(var i=0;i<orderArrayHeader.length;i++){
      console.log("hii");
        var thh = document.createElement("th")
        if ([1, 2, 4, 5].includes(i)) {
          thh.style.display = 'none';
        }
        thead.appendChild(thh).
        // thead.appendChild(document.createElement("th")).
        appendChild(document.createTextNode(orderArrayHeader[i]));
    }
    
    // loop array
    for (i = 0; i < orderArray.length; i++) {
        // get inner array
        var vals = orderArray[i];
        // create tr element
      var row = document.createElement('tr');
      // show biking routes direction on google map
      row.onclick = function () {
        // togglepopularRoutes([startlat, startlon], [endlat, endlon])
        var startlat = Number(this.cells[1].innerHTML)
        var startlon = Number(this.cells[2].innerHTML)
        var endlat = Number(this.cells[4].innerHTML)
        var endlon = Number(this.cells[5].innerHTML)
        console.log(startlat)
        console.log(startlon)
        console.log(endlat)
        console.log(endlon)

        togglepopularRoutes([startlat, startlon], [endlat, endlon])

      }
        // loop inner array
        for (var b = 0; b < vals.length; b++) {
            // create td element
            var cell = document.createElement('td');

            if ([1, 2, 4, 5].includes(b)) {
              cell.style.display = 'none';
            }

            // set text
            cell.textContent = vals[b];
            // cell.classList.add("hidden");
            // append td to tr
            row.appendChild(cell);
        }
        //append tr to tbody
        tbody.appendChild(row);
    }
    // append tbody to table
    table.appendChild(tbody);
    // append table to container
    container.appendChild(table);
  } else {
    container.innerHTML = ""
  }
}


// Activity Bar Chart
var yearlyactivityData = [
  {
    x: ['2017', '2018', '2019', '2020', '2021'],
    y: [573699, 733115, 891766, 572173, 399775],
    type: 'bar'
  }
];




function toggleActivityBar() {
  if (document.getElementById("activityBarchart").innerHTML == "") {
    Plotly.newPlot('activityBarchart', yearlyactivityData, {
      title: 'Bike Rental activity by year',
    });
    plotformYearMonthData();
    plotformWeekdayData();
    plotformHourlyData();
  }
  else {
    document.getElementById("activityBarchart").innerHTML = ""
  }
}


var year_month_activityData = [17077,18041,21363,32410,54370,75972,99762,98083,66674,44887,24633,20427,20394,22264,36798,42657,88511,87445,114423,111011,77489,65300,39250,27573,36756,26097,57462,58406,94432,108682,128770,136513,92304,66563,53516,32265,25119,41035,36490,30718,48746,58241,80071,87947,65432,47917,28392,22065,24736,25392,36728,50858,64516,77987,119512]



function plotformYearMonthData() {
  var trace1 = {
    x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    y: [17077, 18041, 21363, 32410, 54370, 75972, 99762, 98083, 66674, 44887, 24633, 20427],
    type: 'bar',
    name: "2017"
  };

  var trace2 = {
    x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    y: [20394, 22264, 36798, 42657, 88511, 87445, 114423, 111011, 77489, 65300, 39250, 27573],
    type: 'bar',
    name: "2018"
  };

  var trace3 = {
    x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    y: [36756, 26097, 57462, 58406, 94432, 108682, 128770, 136513, 92304, 66563, 53516, 32265],
    type: 'bar',
    name: "2019"
  };

  var trace4 = {
    x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    y: [25119, 41035, 36490, 30718, 48746, 58241, 80071, 87947, 65432, 47917, 28392, 22065],
    type: 'bar',
    name: "2020"
  };

  var trace5 = {
    x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    y: [24736, 25392, 36728, 50858, 64516, 77987, 119512],
    type: 'bar',
    name: "2021"
  };

  var _data = [trace1, trace2, trace3, trace4, trace5];
  Plotly.newPlot('monthlybar', _data);
}


function plotformWeekdayData() {
  var _data = [
    {
      x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      y: [447719, 470528, 465583, 461000, 464713, 451515, 409470],
      type: 'scatter'
    }
  ];

  var _layout = {
    title: 'Activities of weekdays',
    xaxis: {
      range: ['Monday', 'Sunday'],
      type: 'string'
    },
    yaxis: {
        autorange: false,
        range: [0, 500000],
        type: 'linear'
      }
  };

  Plotly.newPlot('weekdayChart', _data, _layout);
}

function plotformHourlyData() {
  var _x = []
  for (var i = 0; i < 24; i++) {
    _x.push(i)
  }

  var _trace1 = {
    x: _x,
    y: [18631,8276,3889,2375,2279,5573,23251,56803,145823,164476,96923,93589,121684,134624,135230,147558,180560,251080,236818,173363,122527,89145,58954,36112],
    type: 'scatter',
    name: "Weekday"
  };

  var _trace2 = {
    x: _x,
    y: [13827,8791,5198,3185,1695,1512,3071,6505,13522,23385,37859,51848,63563,72770,80171,84982,84164,77288,65725,53939,40403,30148,21292,16142],
    type: 'scatter',
    name: "Weekend"
  };
  var _data = [_trace1, _trace2]


  var _layout = {
    title: 'Hourly activities',
    // xaxis: {
    //   range: [0,],
    //   type: 'string'
    // },
    yaxis: {
        autorange: true,
        range: [0, 40000],
        type: 'linear'
      }
  };

  Plotly.newPlot('hourlyChart', _data, _layout);
}




// 
// 
// 
// HeatMap
// 
// 
// 

const getheatMapdataByMonth = async () => {
    showHeatMap();
    const selectedYear = document.getElementById("year").value;
    const selectedMonth = document.getElementById("month").value;
    console.log("test cors")
    let url = "http://192.168.1.106:5000/api/heatmapmonthly?year=" + String(selectedYear) + "&" + "month=" + String(selectedMonth)
    console.log(url)
    fetch(url, {
        method: 'GET', 
    })
    .then(response => response.json())
    .then(data => heatmapJsonTransform(data))
    .catch(err => console.log('Request Failed', err));
}


const heatmapJsonTransform = (jsonData) => {
  var newHeatMapData = []
  for (let [key, value] of Object.entries(jsonData)) {
    lat = value.lat;
    lon = value.lon;
    ride_count = value.ride_count;
    newadd = {location: new google.maps.LatLng(lat, lon), weight: ride_count}
    newHeatMapData.push(newadd)
  }
  console.log(newHeatMapData);
  heatmap.set("data", newHeatMapData);
}

// 
// 
// TOP N Routes 
// 
// 

const showTopNRoutes = async () => {
    const selectedYear = document.getElementById("year").value;
    const selectedMonth = document.getElementById("month").value;
    console.log("test cors")
    let url = "http://192.168.1.106:5000/api/heatmapmonthly?year=" + String(selectedYear) + "&" + "month=" + String(selectedMonth)
    console.log(url)
    fetch(url, {
        method: 'GET', 
    })
    .then(response => response.json())
    .then(data => heatmapJsonTransform(data))
    .catch(err => console.log('Request Failed', err));
}


function TopRoutes() {
  document.getElementById("currentMode").innerHTML = "Current in TopRoutes";
  mode = modes[1];
  map = new google.maps.Map(document.getElementById("map"), {
  zoom: 13,
  center: { lat: 49.28275, lng: -123.12078 },
  styles: [ 
    { 
      "featureType": "poi", 
      "stylers": [ 
        { "visibility": "off" } 
      ] 
    } 
  ] 
  });
}


const getTopRoutesByMonth = async () => {
    const selectedYear = document.getElementById("year").value;
    const selectedMonth = document.getElementById("month").value;
    console.log("test cors")
    let url = "http://192.168.1.106:5000/api/popular_routes?year=" + String(selectedYear) + "&" + "month=" + String(selectedMonth)
    console.log(url)
    fetch(url, {
        method: 'GET', 
    })
    .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => TopRoutesTransform(data))
    .catch(err => console.log('Request Failed', err));
}


const TopRoutesTransform = (jsonData) => {
  orderArray = []
  for (let [key, value] of Object.entries(jsonData)) {
    // console.log(value)
    route = []
    departS = value["Departure station"]
    departlat = value["Departure lat"]
    departlon = value["Departure long"]
    returnS = value["Return station"]
    returnlat = value["Return lat"]
    returnlon = value["Return long"]
    route.push(String(departS))
    route.push(String(departlat))
    route.push(String(departlon))
    route.push(String(returnS))
    route.push(String(returnlat))
    route.push(String(returnlon))
    orderArray.push(route)
  }
  // console.log(route)
  displayTable()
  showtopNroutesMarkers(orderArray)
}


function displayTable() {
  var container = document.getElementById('topNcontainer');
  var tableexist = document.querySelector("table");
  container.innerHTML = ""
  // create table element
  var table = document.createElement('table');
  table.classList.add("table")
  var tbody = document.createElement('tbody');
  var thead = document.createElement('thead');

  table.appendChild(thead);
  
  for(var i=0;i<orderArrayHeader.length;i++){
      var thh = document.createElement("th")
      if ([1, 2, 4, 5].includes(i)) {
        thh.style.display = 'none';
      }
      thead.appendChild(thh).
      // thead.appendChild(document.createElement("th")).
      appendChild(document.createTextNode(orderArrayHeader[i]));
  }
  
  // loop array
  for (i = 0; i < orderArray.length; i++) {
      // get inner array
      var vals = orderArray[i];
      // create tr element
    var row = document.createElement('tr');
    // show biking routes direction on google map

      // loop inner array
      for (var b = 0; b < vals.length; b++) {
          // create td element
          var cell = document.createElement('td');

          if ([1, 2, 4, 5].includes(b)) {
            cell.style.display = 'none';
          }

          // set text
          cell.textContent = vals[b];
          // cell.classList.add("hidden");
          // append td to tr
          row.appendChild(cell);
      }
      //append tr to tbody
      tbody.appendChild(row);
  }
  // append tbody to table
  table.appendChild(tbody);
  // append table to container
  container.appendChild(table);
}


var topNRoutesmarkers = [];



// input format: ["Checkout Station","Lat","Lon","Destination Station", "lat", "lon"];
function showtopNroutesMarkers(locations) {
  console.log("show Markers")
  clearMarkers()

  const departsvgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  };

  const returnsvgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "red",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  };
  
  for (var i = 0; i < locations.length; i++) {
    var loc = locations[i]
    console.log(loc)
    // add depart station marker
    addMarker(loc[1], loc[2], loc[0], departsvgMarker)
    // add return station marker
    addMarker(loc[4], loc[5], loc[3], returnsvgMarker)
  }
}

function addMarker(_lat, _lon, _label, _icon ) {
    var retrunLoc = new google.maps.LatLng(parseFloat(_lat), parseFloat(_lon));
    var marker = new google.maps.Marker({
            position: retrunLoc,
            map: map,
            label: _label,
            icon: _icon,
        });
    topNRoutesmarkers.push(marker);
}

function clearMarkers() {
  for (var i=0; i<topNRoutesmarkers.length; i++) {
    topNRoutesmarkers[i].setMap(null);
  }
    
  // Reset the markers array
  topNRoutesmarkers = [];
}


function show() {
  console.log("show")
  if (mode == modes[0]) {
    // heatmap
    getheatMapdataByMonth()
  } else if (mode == modes[1]) {
    // top N routes
    getTopRoutesByMonth()
  }

}


// Demand Forecast
function demandForecast() {
  document.getElementById("currentMode").innerHTML = "Current in Demand Forecast";
  // getdemandForecast()
}

const getdemandForecast = async () => {
  const selecteTime = document.getElementById("Forecastmode").value;
    console.log("test cors")
    let url = "http://192.168.1.106:5000/api/demandForecast?time=" + String(selecteTime)
    console.log(url)
    fetch(url, {
        method: 'GET', 
    })
    .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => DemandForecastTransform(data))
    .catch(err => console.log('Request Failed', err));
}


function forecastshow() {
  getdemandForecast()
}

const DemandForecastTransform = (jsonData) => {
  forecastArray = []
  for (let [key, value] of Object.entries(jsonData)) {
    // console.log(value)
    forecast = []
    station = value["station"]
    lat = value["lat"]
    long = value["long"]
    label = value["label"]
    forecast.push(String(station))
    forecast.push(String(lat))
    forecast.push(String(long))
    forecast.push(String(label))
    forecastArray.push(forecast)
  }
  // console.log(route)
  showDemandMarkers(forecastArray)
}

function showDemandMarkers(locations) {
  console.log("show Markers")
  clearMarkers()

  const departsvgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  };

  const returnsvgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "red",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  };
  
  for (var i = 0; i < locations.length; i++) {
    var loc = locations[i]
    console.log(loc)
    if (loc[3] == 1) {
     // add depart station marker
      addMarker(loc[1], loc[2], "", departsvgMarker)
    } else {
      // add return station marker
      addMarker(loc[1], loc[2], "", returnsvgMarker)
    }
  }
}


// Cluster

function showCluster() {
  document.getElementById("currentMode").innerHTML = "Current in station cluster";
  getCluster()
} 

const getCluster = async () => {
    console.log("test cors")
    let url = "http://192.168.1.106:5000/api/cluster"
    console.log(url)
    fetch(url, {
        method: 'GET', 
    })
    .then(response => response.json())
      // .then(data => console.log(data))
    .then(data => clusterTransform(data))
    .catch(err => console.log('Request Failed', err));
}

function clusterTransform(jsonData) {
  console.log("transform")
  clusterArray = []
  for (let [key, value] of Object.entries(jsonData)) {
    // console.log(value)
    cluster = []
    station = value["Return station"]
    lat = value["return_lat"]
    long = value["return_long"]
    label = value["label"]
    cluster.push(String(station))
    cluster.push(String(lat))
    cluster.push(String(long))
    cluster.push(String(label))
    clusterArray.push(cluster)
  }
  // console.log(clusterArray)
  showClusterMarkers(clusterArray)
}

function showClusterMarkers(locations) {
  console.log("show Markers")
  clearMarkers()

  const c1Marker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  };

  const c2Marker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "red",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  };

  const c3Marker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "yellow",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  };
  
  for (var i = 0; i < locations.length; i++) {
    var loc = locations[i]
    console.log(loc)
    if (loc[3] == 0) {
     // add depart station marker
      addMarker(loc[1], loc[2], "", c1Marker)
    } else if (loc[3] == 1){
      // add return station marker
      addMarker(loc[1], loc[2], "", c2Marker)
    } else{
      // add return station marker
      addMarker(loc[1], loc[2], "", c3Marker)
    }
  }
}