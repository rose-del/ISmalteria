import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "../estilos/Map.css";

const center = [-7.036492, -35.872675];
const position = [-7.036217628355216, -35.87290417463873]

const TelaMapa = () => (
  <div id="map" style={{ width: '100%', height: "92vh" }}>
    <MapContainer center={center} zoom={15} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
         IFPB - Campus Esperança - PB-121 <br /> Esperança - PB.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default TelaMapa;