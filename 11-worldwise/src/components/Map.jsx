import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();

  /*
  1.default mapPosition이 [0,0]으로 설정됨
  2.parameters에서 lat, lng을 확인
  3. 
  */
  const [mapPosition, setMapPosition] = useState([0, 0]);

  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
      //This re-render passes the updated mapPosition as a prop to MapContainer.
      //However, MapContainer does not automatically update the Leaflet map instance with the new center value because it does not reapply updated props to the Leaflet map instance.
    },
    [mapLat, mapLng]
  );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>
                {city.emoji} {city.cityName}
              </span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

//*****USING COMPONENT INSTEAD OF FUNCTION*****/
//To ensure the map’s center updates to reflect the new state, you use the ChangeCenter component.
//With map.setView(position), you manually set the map’s view to the new position whenever position changes.
function ChangeCenter({ position }) {
  const map = useMap(); //get leaflet map instance by useMap hook and create a reference
  map.setView(position); //set view of the map to the new position
  return null;
}

export default Map;
