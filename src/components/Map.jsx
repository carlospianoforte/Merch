import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({data}) => {
    const mapStyles = {
        width: '100%',
        height: '50vh',
    }

    const defaultCenter = { 
        lat: data.lat, lng: data.lng,
    }

  return (
    <LoadScript googleMapsApiKey='AIzaSyCzy_JRL9vSM7Z2DGZGtXu2Ku71RYN270g'>
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={9}
            center={defaultCenter}
        >
            <Marker position={defaultCenter} />
        </GoogleMap>
    </LoadScript>
  )
}

export default Map