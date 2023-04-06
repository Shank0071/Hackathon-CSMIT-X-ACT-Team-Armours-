// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9GYU4gXQ4Zyxj-idTbvNwgtyvTh2ESpo",
  authDomain: "latlonmap.firebaseapp.com",
  projectId: "latlonmap",
  storageBucket: "latlonmap.appspot.com",
  messagingSenderId: "556268563116",
  appId: "1:556268563116:web:ab02edc3e5af98aceb8d09",
  measurementId: "G-MJ64CG4YNK",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function randomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed(4)
}


// Create a Leaflet map object
const map = L.map("mapid");

// Add a tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const updateData = () => {
  for (let i = 0; i < 6; i++) {
    const ref2 = database.ref(`users/user${i}`);
    ref2.update({
      lat: randomNumber(11, 12),
      lon: randomNumber(78, 79),
    });
  }
};

setInterval(() => {
  updateData();
}, 5000);

const ref = database.ref("users");

setInterval(() => {
  ref.once("value", function (snapshot) {
    const data = snapshot.val();
    const results7 = [];
    console.log(data);
    Object.keys(data).forEach((key) => {
      const item = data[key];
      console.log(item);
      map.setView([item.lat, item.lon], 10);
      results7.push({
        id: item.id,
        name: item.name,
        age: item.age,
        lat: item.lat,
        lon: item.lon,
        markers: L.marker([item.lat, item.lon]).addTo(map),
      });
    });
    console.log(results7);
    results7.forEach((marker, index) => {
      setTimeout(() => {
        marker.markers.remove();
      }, 5000);
      marker.markers.bindPopup(
        `name: ${marker.name} <br>age: ${marker.age}  <br> latitude: ${marker.lat} <br> longitude: ${marker.lon}`
      );
    });
  });
}, 6000);

const ref1 = database.ref("USERS/user1");

setInterval(() => {
  ref1.once("value", function (snapshot) {
    const data = snapshot.val();
    console.log(data);
    const lat = Number(data.lat) / 1000;
    const lon = Number(data.lon) / 1000;
    const healthStats = data.status;
    console.log(lat, lon);
    const marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(
      `name: ${data.name}<br>age: ${data.age} <br> lat: ${lat} <br>lon:  ${lon} <br>status: ${healthStats}`
    );
    setTimeout(() => {
      marker.remove();
    }, 2000);
    console.log("latlon: ", lat, lon);
  });
}, 2000);


const ref2 = database.ref("USER/user1")

setInterval(() => {
  ref2.once("value", function (snapshot) {
    const data = snapshot.val();
    console.log(data);
    const lat = Number(data.lat) / 1000;
    const lon = Number(data.long) / 1000;
    const healthStats = data.status;
    console.log(lat, lon);
    const marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(
      `name: ${data.name}<br>age: ${data.age} <br> lat: ${lat} <br>lon:  ${lon} <br>status: ${healthStats}`
    );
    setTimeout(() => {
      marker.remove();
    }, 2000);
    console.log("latlon: ", lat, lon);
  });
}, 2000)

const ref3 = database.ref("USER/user2")

setInterval(() => {
  ref3.once("value", function (snapshot) {
    const data = snapshot.val();
    console.log(data);
    const lat = Number(data.lat) / 1000;
    const lon = Number(data.long) / 1000;
    const healthStats = data.status;
    console.log(lat, lon);
    const marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(
      `name: ${data.name}<br>age: ${data.age} <br> lat: ${lat} <br>lon:  ${lon} <br>status: ${healthStats}`
    );
    setTimeout(() => {
      marker.remove();
    }, 2000);
    console.log("latlon: ", lat, lon);
  });
}, 2000)

