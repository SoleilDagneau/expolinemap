import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'


export default function Map() {

    const blueOption = { color: '#000080'}
    const polyline = [
        [49.28594, -123.11129],
        [49.2862526257819, -123.1202039],
        [49.283438850308286, -123.11621933259502],
        [49.278856, -123.108513],
        [49.273114, -123.100348],
        [49.2626, -123.0692],
        [49.2483, -123.0559],
        [49.244084, -123.045931],
        [49.23835, -123.031704],
        [49.2298, -123.0127],
        [49.2258, -123.0039],
        [49.22022674217617, -122.988486726947122],
        [49.2123, -122.9592],
        [49.20001, -122.94872],
        [49.2015, -122.9126],
        [49.20476, -122.906161],
        [49.2247, -122.8894],
        [49.2333, -122.8829],
        [49.2485, -122.8970],
        [49.25337, -122.91815]
    ]
    const surreyexpo = [
        [49.20476, -122.906161],
        [49.2044, -122.8743],
        [49.1990, -122.8507],
        [49.1896, -122.8480],
        [49.1827, -122.8446]

    ]
    


    return (
        <MapContainer className={style.map} center={[49.28594, -123.11129]} zoom={14} scrollWheelZoom={true}> 
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[49.28594, -123.11129]}>
      <Popup>
          Waterfront Station <br/> Expo Line
      </Popup>
  </Marker>
  <Marker position={[49.2862526257819, -123.1202039]}>
      <Popup>
          Burrard Station <br/> Expo Line
      </Popup>
  </Marker>
  <Marker position={[49.283438850308286, -123.11621933259502]}>
      <Popup>
          Granville Station <br/> Expo Line
      </Popup>
  </Marker>
  <Marker position={[49.278856, -123.108513]}>
      <Popup>
      Stadium–Chinatown Station <br/> Expo Line
      </Popup>
  </Marker>
  <Marker position={[49.273114, -123.100348]}>
      <Popup>
      Main Street–Science World Station <br/> Expo Line
      </Popup>
  </Marker>
  <Marker position={[49.2626, -123.0692]}>
      <Popup>
      Commercial–Broadway Station <br/> Expo Line on Platforms 3 and 4
      </Popup>
  </Marker>
  <Marker position={[49.2483, -123.0559]}>
      <Popup>
      Nanaimo Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={ [49.244084, -123.045931]}>
      <Popup>
      29th Ave Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.23835, -123.031704]}>
      <Popup>
      Joyce–Collingwood Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.2298, -123.0127]}>
      <Popup>
      Patterson Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.2258, -123.0039]}>
      <Popup>
      Metrotown Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.22022674217617, -122.988486726947122]}>
      <Popup>
      Royal Oak Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.2123, -122.9592]}>
      <Popup>
      Edmonds Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={ [49.20001, -122.94872]}>
      <Popup>
      22nd Street Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={ [49.2015, -122.9126]}>
      <Popup>
      New Westminster Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={ [49.20476, -122.906161]}>
      <Popup>
      Columbia Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.2247, -122.8894]}>
      <Popup>
      Sapperton Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.2333, -122.8829]}>
      <Popup>
      Braid Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.2485, -122.8970]}>
      <Popup>
      Lougheed Town Centre Station <br/> Millennium Line and Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.25337, -122.91815]}>
      <Popup>
      Production Way–University Station <br/> Millennium Line and Expo Line 
      </Popup>
  </Marker>
  <Marker position={ [49.2044, -122.8743]}>
      <Popup>
      Scott Road Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.1990, -122.8507]}>
      <Popup>
      Gateway Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.1896, -122.8480]}>
      <Popup>
      Surrey Central Station <br/> Expo Line 
      </Popup>
  </Marker>
  <Marker position={[49.1827, -122.8446]}>
      <Popup>
      King George Station <br/> Expo Line 
      </Popup>
  </Marker>

  <Polyline pathOptions={blueOption} positions={polyline}/>
  <Polyline pathOptions={blueOption} positions={surreyexpo}/>
    </MapContainer>
    )
}