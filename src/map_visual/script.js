// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTTl046sFCnjj3T3Yx3o449cNgzn9IvTY&libraries=visualization"> */}
let map, heatmap;

function initMap() {
  console.log("map")
   map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
     center: { lat: 49.28275, lng: -123.12078 },
    
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    gradient: gg(),
  });
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);
  document
    .getElementById("month-range")
    .addEventListener("input", changemonth);
}


function initMap_org() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 49.28275, lng: -123.12078 },
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);
  document
    .getElementById("change-data")
    .addEventListener("click", changeData);

}

function toggleHeatmap() {
  console.log("change map")
  heatmap.setMap(heatmap.getMap() ? null : map);
}


function Map(func) {
  console.log("map")
   map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
     center: { lat: 49.28275, lng: -123.12078 },
    
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: func(),
    map: map,
    gradient: gg(),
  });
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);
  document
    .getElementById("change-data")
    .addEventListener("click", changeData);
  document
    .getElementById("month-range")
    .addEventListener("input", changemonth);
}

function gg() {
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

function changeGradient() {
  const gradient = [
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

  heatmap.set("gradient", heatmap.get("gradient") ? gradient : null);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

var station_data = [
{location: new google.maps.LatLng(49.274249, -123.098481), weight: 343},
{location: new google.maps.LatLng(49.273103, -123.069892), weight: 100},
{location: new google.maps.LatLng(49.265005, -123.079481), weight: 15},
{location: new google.maps.LatLng(49.265024, -123.08127), weight: 0.5},
{location: new google.maps.LatLng(49.271377, -123.069416), weight: 0.5},
{location: new google.maps.LatLng(49.268616, -123.069908), weight: 0.5},
{location: new google.maps.LatLng(49.266969, -123.069936), weight: 0.5}
]
  
// Heatmap data: 500 Points
function getPoints() {
  return [
{labels: "ABC", location: new google.maps.LatLng(49.262487, -123.114397), weight: 12},
{labels: "ABC", location: new google.maps.LatLng(49.285871, -123.12105), weight: 10},
{labels: "ABC", location: new google.maps.LatLng(49.274566, -123.121817), weight: 12},
{location: new google.maps.LatLng(49.279764, -123.110154), weight: 34},
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
          { location: new google.maps.LatLng(49.288444, -123.139203), weight: 15 },
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
{location: new google.maps.LatLng(49.289124, -123.12196), weight: 4},
{location: new google.maps.LatLng(49.290419, -123.12581), weight: 18},
{location: new google.maps.LatLng(49.285836, -123.127265), weight: 31},
{location: new google.maps.LatLng(49.28062, -123.12482), weight: 16},
{location: new google.maps.LatLng(49.279938, -123.127478), weight: 32},
{location: new google.maps.LatLng(49.285512, -123.1384), weight: 14},
{location: new google.maps.LatLng(49.289581, -123.132184), weight: 6},
{location: new google.maps.LatLng(49.273663, -123.127075), weight: 11},
{location: new google.maps.LatLng(49.275295, -123.132585), weight: 21},
{location: new google.maps.LatLng(49.28972, -123.144028), weight: 12},
{location: new google.maps.LatLng(49.285253, -123.134356), weight: 8},
{location: new google.maps.LatLng(49.283343, -123.131099), weight: 34},
{location: new google.maps.LatLng(49.284605, -123.108662), weight: 2},
{location: new google.maps.LatLng(49.279821, -123.10802), weight: 31},
{location: new google.maps.LatLng(49.278004, -123.105664), weight: 14},
{location: new google.maps.LatLng(49.279342, -123.101822), weight: 12},
{location: new google.maps.LatLng(49.273833, -123.114373), weight: 17},
{location: new google.maps.LatLng(49.278283, -123.118612), weight: 14},
{location: new google.maps.LatLng(49.28526, -123.141809), weight: 19},
{location: new google.maps.LatLng(49.281506, -123.120101), weight: 21},
{location: new google.maps.LatLng(49.276115, -123.114496), weight: 11},
{location: new google.maps.LatLng(49.272827, -123.147744), weight: 3},
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
{location: new google.maps.LatLng(49.27808, -123.130557), weight: 29},
{location: new google.maps.LatLng(49.291909, -123.140713), weight: 10},
{location: new google.maps.LatLng(49.293257, -123.138563), weight: 28},
{location: new google.maps.LatLng(49.288011, -123.132006), weight: 9},
{location: new google.maps.LatLng(49.28117, -123.104419), weight: 12},
{location: new google.maps.LatLng(49.283227, -123.120523), weight: 25},
{location: new google.maps.LatLng(49.299292, -123.130281), weight: 9},
{location: new google.maps.LatLng(49.29534, -123.150433), weight: 20},
{location: new google.maps.LatLng(49.302577, -123.155616), weight: 28},
{location: new google.maps.LatLng(49.294318, -123.148808), weight: 13},
{location: new google.maps.LatLng(49.298657, -123.121176), weight: 31},
{location: new google.maps.LatLng(49.259183, -123.120126), weight: 7},
{location: new google.maps.LatLng(49.263837, -123.105173), weight: 9},
{location: new google.maps.LatLng(49.270721, -123.146175), weight: 9},
{location: new google.maps.LatLng(49.265605, -123.152566), weight: 6},
{location: new google.maps.LatLng(49.267222, -123.153157), weight: 5},
{location: new google.maps.LatLng(49.262255, -123.126217), weight: 16},
{location: new google.maps.LatLng(49.257654, -123.153212), weight: 5},
{location: new google.maps.LatLng(49.25919, -123.148268), weight: 3},
{location: new google.maps.LatLng(49.25741, -123.148531), weight: 4},
{location: new google.maps.LatLng(49.268216, -123.103168), weight: 4},
{location: new google.maps.LatLng(49.285953, -123.124066), weight: 4},
{location: new google.maps.LatLng(49.284554, -123.111031), weight: 8},
{location: new google.maps.LatLng(49.279611, -123.115056), weight: 3},
{location: new google.maps.LatLng(49.280881, -123.130672), weight: 16},
{location: new google.maps.LatLng(49.256845, -123.120071), weight: 2},
{location: new google.maps.LatLng(49.25849, -123.104799), weight: 8},
{location: new google.maps.LatLng(49.256825, -123.105234), weight: 7},
{location: new google.maps.LatLng(49.258425, -123.100792), weight: 6},
{location: new google.maps.LatLng(49.270905, -123.126006), weight: 22},
{location: new google.maps.LatLng(49.273568, -123.129935), weight: 17},
{location: new google.maps.LatLng(49.277141, -123.122589), weight: 15},
{location: new google.maps.LatLng(49.267859, -123.145782), weight: 3},
{location: new google.maps.LatLng(49.265336, -123.145823), weight: 11},
{location: new google.maps.LatLng(49.267628, -123.127698), weight: 9},
{location: new google.maps.LatLng(49.275938, -123.145939), weight: 7},
{location: new google.maps.LatLng(49.2756, -123.102661), weight: 13},
{location: new google.maps.LatLng(49.284157, -123.099917), weight: 10},
{location: new google.maps.LatLng(49.258924, -123.152591), weight: 2},
{location: new google.maps.LatLng(49.266774, -123.141135), weight: 15},
{location: new google.maps.LatLng(49.273355, -123.154493), weight: 9},
{location: new google.maps.LatLng(49.276144, -123.151272), weight: 3},
{location: new google.maps.LatLng(49.268339, -123.157443), weight: 11},
{location: new google.maps.LatLng(49.284062, -123.095097), weight: 3},
{location: new google.maps.LatLng(49.261742, -123.13148), weight: 11},
{location: new google.maps.LatLng(49.282586, -123.102263), weight: 7},
{location: new google.maps.LatLng(49.263962, -123.112621), weight: 5},
{location: new google.maps.LatLng(49.26667, -123.112414), weight: 5},
{location: new google.maps.LatLng(49.262206, -123.109091), weight: 8},
{location: new google.maps.LatLng(49.270218, -123.109189), weight: 15},
{location: new google.maps.LatLng(49.27023, -123.10651), weight: 24},
{location: new google.maps.LatLng(49.262062, -123.104656), weight: 3},
{location: new google.maps.LatLng(49.27033, -123.10275), weight: 21},
{location: new google.maps.LatLng(49.261122, -123.097571), weight: 1},
{location: new google.maps.LatLng(49.258902, -123.109596), weight: 3},
{location: new google.maps.LatLng(49.261973, -123.09725), weight: 5},
{location: new google.maps.LatLng(49.282224, -123.132778), weight: 31},
{location: new google.maps.LatLng(49.287782, -123.12395), weight: 7},
{location: new google.maps.LatLng(49.265071, -123.123864), weight: 11},
{location: new google.maps.LatLng(49.265198, -123.131043), weight: 11},
{location: new google.maps.LatLng(49.273691, -123.102232), weight: 31},
{location: new google.maps.LatLng(49.277213, -123.129625), weight: 23},
{location: new google.maps.LatLng(49.2685027, -123.0975014), weight: 2},
{location: new google.maps.LatLng(49.266456, -123.100324), weight: 3},
{location: new google.maps.LatLng(49.278529, -123.100017), weight: 15},
{location: new google.maps.LatLng(49.288682, -123.11818), weight: 18},
{location: new google.maps.LatLng(49.258761, -123.127071), weight: 7},
{location: new google.maps.LatLng(49.258864, -123.14353), weight: 2},
{location: new google.maps.LatLng(49.262822, -123.14338), weight: 6},
{location: new google.maps.LatLng(49.263635, -123.099236), weight: 6},
{location: new google.maps.LatLng(49.28763, -123.127245), weight: 9},
{location: new google.maps.LatLng(49.263649, -123.152421), weight: 8},
{location: new google.maps.LatLng(49.297933, -123.130758), weight: 29},
{location: new google.maps.LatLng(49.258819, -123.131317), weight: 4},
{location: new google.maps.LatLng(49.277595, -123.09583), weight: 7},
{location: new google.maps.LatLng(49.280284, -123.097052), weight: 5},
{location: new google.maps.LatLng(49.277615, -123.091654), weight: 11},
{location: new google.maps.LatLng(49.283325, -123.125249), weight: 10},
{location: new google.maps.LatLng(49.276294, -123.106534), weight: 16},
{location: new google.maps.LatLng(49.277333, -123.087359), weight: 7},
{location: new google.maps.LatLng(49.277469, -123.081315), weight: 8},
{location: new google.maps.LatLng(49.277665, -123.073653), weight: 4},
{location: new google.maps.LatLng(49.277436, -123.070427), weight: 5},
{location: new google.maps.LatLng(49.280332, -123.070068), weight: 2},
{location: new google.maps.LatLng(49.280205, -123.074174), weight: 6},
{location: new google.maps.LatLng(49.280852, -123.084746), weight: 5},
{location: new google.maps.LatLng(49.279235, -123.087528), weight: 4},
{location: new google.maps.LatLng(49.279369, -123.091241), weight: 7},
{location: new google.maps.LatLng(49.283992, -123.091206), weight: 11},
{location: new google.maps.LatLng(49.274881, -123.069323), weight: 5},
{location: new google.maps.LatLng(49.275882, -123.071865), weight: 4},
{location: new google.maps.LatLng(49.273777, -123.092723), weight: 6},
{location: new google.maps.LatLng(49.274249, -123.098481), weight: 8},
{location: new google.maps.LatLng(49.273103, -123.069892), weight: 1},
{location: new google.maps.LatLng(49.265005, -123.079481), weight: 20},
{location: new google.maps.LatLng(49.265024, -123.08127), weight: 5},
{location: new google.maps.LatLng(49.271377, -123.069416), weight: 1},
{location: new google.maps.LatLng(49.268616, -123.069908), weight: 5},
{location: new google.maps.LatLng(49.266969, -123.069936), weight: 3},
{location: new google.maps.LatLng(49.263242, -123.070521), weight: 5},
{location: new google.maps.LatLng(49.261403, -123.070102), weight: 5},
{location: new google.maps.LatLng(49.261263, -123.073707), weight: 4},
{location: new google.maps.LatLng(49.262242, -123.081459), weight: 4},
{location: new google.maps.LatLng(49.262321, -123.09306), weight: 2},
{location: new google.maps.LatLng(49.264251, -123.073853), weight: 3},
{location: new google.maps.LatLng(49.266751, -123.073501), weight: 6},
{location: new google.maps.LatLng(49.263746, -123.069892), weight: 3},
{location: new google.maps.LatLng(49.254667, -123.101389), weight: 10},
{location: new google.maps.LatLng(49.256694, -123.096579), weight: 1},
{location: new google.maps.LatLng(49.258352, -123.096337), weight: 5},
{location: new google.maps.LatLng(49.258817, -123.092797), weight: 3},
{location: new google.maps.LatLng(49.26151, -123.089413), weight: 3},
{location: new google.maps.LatLng(49.263382, -123.088837), weight: 2},
{location: new google.maps.LatLng(49.263518, -123.09568), weight: 5},
{location: new google.maps.LatLng(49.261353, -123.085333), weight: 1},
{location: new google.maps.LatLng(49.264466, -123.085183), weight: 5},
{location: new google.maps.LatLng(49.280197, -123.065859), weight: 3},
{location: new google.maps.LatLng(49.266725, -123.065925), weight: 2},
{location: new google.maps.LatLng(49.261188, -123.066009), weight: 1},
{location: new google.maps.LatLng(49.256857, -123.065646), weight: 6},
{location: new google.maps.LatLng(49.283986, -123.065264), weight: 6},
{location: new google.maps.LatLng(49.257985, -123.083366), weight: 2},
{location: new google.maps.LatLng(49.257939, -123.089531), weight: 6},
{location: new google.maps.LatLng(49.256496, -123.075426), weight: 1},
{location: new google.maps.LatLng(49.267266, -123.090786), weight: 2},
{location: new google.maps.LatLng(49.265242, -123.095577), weight: 7},
{location: new google.maps.LatLng(49.265213, -123.090785), weight: 2},
{location: new google.maps.LatLng(49.284893, -123.128685), weight: 3},
])
  
  heatmap.set("gradient", station_data);
}
