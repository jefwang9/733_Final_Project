// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTTl046sFCnjj3T3Yx3o449cNgzn9IvTY&libraries=visualization"> */}
let map, heatmap, directionsRenderer, directionsService, orignPoint, destinationPoint, bikeLayer;

function initMap() {
  console.log("map")
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 49.28275, lng: -123.12078 },
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    gradient: getgradient(),
  });
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();
  bikeLayer = new google.maps.BicyclingLayer();

  document
    .getElementById("showTable")
    .addEventListener("click", displayTable);
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("toggle-BikeLane")
    .addEventListener("click", toggleBikeLane);
  

  // document
  //   .getElementById("toggle-popularRoutes")
  //   .addEventListener("click", togglepopularRoutes);
  // document
  //   .getElementById("change-gradient")
  //   .addEventListener("click", changeGradient);
  // document
  //   .getElementById("change-opacity")
  //   .addEventListener("click", changeOpacity);
  // document
  //   .getElementById("change-radius")
  //   .addEventListener("click", changeRadius);
  // document
  //   .getElementById("month-range")
  //   .addEventListener("input", changemonth);
}

function toggleHeatmap() {
  console.log("change to heatmap")
  directionsRenderer.setMap(null);
  map.set("zoom", 13)
  // map.set("center", { lat: 49.28275, lng: -123.12078 })
  // heatmap.setMap(map);
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function togglepopularRoutes(orignPoint, destinationpoint) {
  console.log("change to togglepopularRoutes")
  console.log(orignPoint)
  console.log(destinationpoint)
  heatmap.setMap(null);
  directionsRenderer.setMap(map);
  // orignPoint = [49.291285, -123.13526];
  // destinationpoint = [49.28803,  -123.142135];
  calculateAndDisplayRoute(directionsService, directionsRenderer,  orignPoint, destinationpoint);
  // startpoint = { lat: 49.291285, lng: -123.13526 };
  // destinationpoint = { lat: 49.28803, lng: -123.142135 };
 
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer, orignPoint, destinationpoint);
  });
}


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

// var station_data = [
// {location: new google.maps.LatLng(49.274249, -123.098481), weight: 343},
// {location: new google.maps.LatLng(49.273103, -123.069892), weight: 100},
// {location: new google.maps.LatLng(49.265005, -123.079481), weight: 15},
// {location: new google.maps.LatLng(49.265024, -123.08127), weight: 0.5},
// {location: new google.maps.LatLng(49.271377, -123.069416), weight: 0.5},
// {location: new google.maps.LatLng(49.268616, -123.069908), weight: 0.5},
// {location: new google.maps.LatLng(49.266969, -123.069936), weight: 0.5}
// ]
  
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
    
var orderArrayHeader = ["Checkout Station","Lat","Lon","Destination Station", "lat", "lon"];


function displayTable() {

  var tableexist = document.querySelector("table");
  if (!tableexist) {
    // get handle on div
    var container = document.getElementById('container');
    // create table element
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');

    table.appendChild(thead);
    
    for(var i=0;i<orderArrayHeader.length;i++){
        thead.appendChild(document.createElement("th")).
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
    
}




// var pRoutesData = [[(49.291285, -123.13526), (49.288444, -123.139203)],
//       [(49.287528, -123.142139), (49.28602, -123.116624)]
// ] 


// function populateTable(table, rows, cells, content) {
//     var is_func = (typeof content === 'function');
//     if (!table) table = document.createElement('table');
//     for (var i = 0; i < rows; ++i) {
//         var row = document.createElement('tr');
//         for (var j = 0; j < cells; ++j) {
//             row.appendChild(document.createElement('td'));
//             var text = !is_func ? (content + '') : content(table, i, j);
//             row.cells[j].appendChild(document.createTextNode(text));
//         }
//         table.appendChild(row);
//     }
//     return table;
// }

// function generateDataModel() { 
//     console.log("generate data")
//     todos = ["49.291285", "-123.13526"]; 
//     $('#todo-list li').each(function (i, el) { 
//         console.log("generate data")
//         todos.push({text: el.innerText}); 
//     }) 
// } 



//     //1,先准备数据
// var datas=[{
//     start_station:"Yaletown-Roundhouse Station",
//     start_lon: -123.121817,
//     start_lat: 49.274566,
//     destination_station:"Dunsmuir & Beatty",
//     destination_lon: -123.110154,
//     destination_lat: 49.279764	
//     },{
//     start_station:"6th & Carolina",
//     start_lon: -123.090785,
//     start_lat: 49.265213,
//     destination_station: "Georgia & Homer",
//     destination_lon: -123.115271,
//     destination_lat: 49.280787	
// }];


// var orderArrayHeader = ["Start station","lat","lon","Destination Station", "lat", "lon"];

// function generateTable() {
//   //2,往tbody里面创建行，有几个人（通过数组的长度）我们就创建几行
//   // var tbody = document.querySelector("tbody");
//   var tdiv = document.getElementById("table");
//   var tbody = document.createElement("table");
//   // x.style.display = "block";

//   var thead = document.createElement('thead');

//   tdiv.appendChild(thead);
//   for(var i=0;i<orderArrayHeader.length;i++){
//     thead.appendChild(document.createElement("th")).
//     appendChild(document.createTextNode(orderArrayHeader[i]));
//   }

//   for(var i=0;i<datas.length;i++)  //外面的for循环 是 行tr
//   {
//       var tr=document.createElement("tr");
//       tbody.appendChild(tr);
//       //3,往tr每一行里面创建单元格（跟数据有关系的3个单元格），td单元格的数量取决于每个对象的属性个数 for循环遍历对象 datas[i]
//       for(var k in datas[i])   //里面的for循环是 列
//       {
//           var td=document.createElement("td");  //创建单元格
//           tr.appendChild(td);
//           td.innerHTML=datas[i][k]; //把对象里面的属性值 datas[i][k]给td
//       }
//       //4，创建有删除二字的单元格
//       var td=document.createElement("td");
//       tr.appendChild(td);
//       td.innerHTML="<a href='javascript:;'>show</a>";
//   }
//   tdiv.appendChild(tbody)
//   showIndividualRoute()
//   display();
// }


// function showIndividualRoute() {
//     console.log("showIndividualRoute")
//    var as=document.querySelectorAll("a");
//     for(var i=0;i<as.length;i++)
//     {
//         as[i].onclick=function () {  //点击a 删除 当前a 所在的行（a链接的爸爸的爸爸）
//             // tbody.removeChild(this.parentNode.parentNode);
//           console.log("show data")
//           var startlon = Number(this.parentNode.parentNode.cells[1].innerHTML)
//           var startlat = Number(this.parentNode.parentNode.cells[2].innerHTML)
//           var endlon = Number(this.parentNode.parentNode.cells[4].innerHTML)
//           var endlat = Number(this.parentNode.parentNode.cells[5].innerHTML)
//           console.log(this.parentNode.parentNode.cells[0])
//           togglepopularRoutes([startlat, startlon], [endlat, endlon])
//         }
//     }
// }


function deleteTable() {
  var tbl = document.querySelector("table");
  if(tbl) tbl.parentNode.removeChild(tbl);
  // if(tbl) tbl.parentNode.removeChild(tbl);
  // x.style.display = "none";
    //5,删除操作
  // var tbody = document.querySelector("tbody");
  // tbody.removeChild();
    // for(var i=0;i<as.length;i++)
    // {
    //     as[i].onclick=function () {  //点击a 删除 当前a 所在的行（a链接的爸爸的爸爸）
    //         tbody.removeChild(this.parentNode.parentNode);
    //     }
    // }
}




