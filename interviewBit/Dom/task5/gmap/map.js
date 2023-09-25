let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 16.9647984, lng: 82.2257192 },
    zoom: 8
  });
}

initMap();
