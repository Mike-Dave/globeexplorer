import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import getPlaceName from "../../api/geocoding";

function Map({ latlng, nativeName, region }) {
  useEffect(() => {
    // Initialize the map
    const mymap = L.map("map").setView(latlng, 6);

    // Add a tile layer (OpenStreetMap as an example)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(mymap);

    // Add a marker
    const marker = L.marker(latlng).addTo(mymap);

    // Add a popup to the marker

    marker
      .bindPopup(L.popup({ autoClose: false, closeOnClick: false }))
      .setPopupContent(`${nativeName} ${region}`)
      .openPopup();

    function onMapClick(e) {
      const { lat, lng } = e.latlng;

      getPlaceName(lat, lng)
        .then((placeName) => {
          L.marker([lat, lng])
            .addTo(mymap)
            .bindPopup(L.popup({ autoClose: false, closeOnClick: false }))
            .setPopupContent(placeName)
            .openPopup();
        })
        .catch((error) => {
          console.error("Error fetching place name:", error);
        });

      // Zoom in to the clicked location with a slightly increased zoom level
      mymap.setView([lat, lng], 10);
    }

    mymap.on("click", onMapClick);

    // Clean up function to remove the map when the component unmounts
    return () => {
      mymap.remove();
    };
  }, [latlng, nativeName, region]);

  return (
    <div
      id="map"
      className="h-[18.75rem] w-[18.75rem] md:h-[43.75rem] md:w-[56.25rem]"
    ></div>
  );
}

export default Map;
