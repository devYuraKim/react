import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../../contexts/CitiesContext";
import { useGeolocation } from "../../hooks/useGeolocation";
import Button from "../components/Button";
import { useUrlPosition } from "../../hooks/useUrlPosition";

function Map() {
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
    setPosition,
  } = useGeolocation();

  const [mapPosition, setMapPosition] = useState([40.7128, -74.006]);

  const [lat, lng] = useUrlPosition();

  useEffect(
    function () {
      if (!lat || !lng) return;
      else {
        setMapPosition([lat, lng]);
        setPosition(null);
      }
    },
    [lat, lng, setPosition]
  );

  const { cities } = useCities();

  useEffect(
    function () {
      if (!geolocationPosition) return;
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading" : "Use your position"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={5}
        scrollWheelZoom={true}
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
              <span>{city.emoji}</span>
              <span>{city.notes}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter mapPosition={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ mapPosition }) {
  const map = useMap();
  map.setView(mapPosition);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
