// Create a Leaflet map object
const map = L.map("mapid");


// Add a tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);


const ref = database.ref("users");
ref.on("value", function (snapshot) {
  const data = snapshot.val();
  const results7 = [];
  console.log(data);
  Object.keys(data).forEach((key) => {
    const item = data[key];
    console.log(item);
    map.setView([item.lat, item.lon], 10);
    L.marker([item.lat, item.lon]).addTo(map);
    results7.push({
      id: item.id,
      markers: L.marker([item.lat, item.lon]).addTo(map),
    });
  });
  console.log(results7);
  results7.forEach((marker, index) => {
    marker.markers.bindPopup(`My id is ${marker.id} <br> this is a`);
  });
});
