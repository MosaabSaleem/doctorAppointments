import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './map.css';

const containerStyle = {
  width: '45%',
  height: '400px',
  borderRadius: '20px',
};

const address = 'Cnr Hawkesbury Road and, Darcy Rd, Westmead NSW 2145, Australia';

export default function MapWithMarker() {
    const [coordinates, setCoordinates] = React.useState(null);

    const handleScriptLoad = () => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === 'OK') {
                const location = results[0].geometry.location;
                setCoordinates({
                    lat: location.lat(),
                    lng: location.lng()
                });
            } else {
                console.error('Geocode was not successful for the following reason: ' + status);
            }
        });
    };

    const handleMarkerClick = () => {
        const encodedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBhNItuYXoKGcad0jvKP4iOCT-C3AUgLwo"
            onLoad={handleScriptLoad}
        >
            {coordinates && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coordinates}
                    zoom={15}
                    className="map-container"
                >
                    <Marker
                        position={coordinates}
                        onClick={handleMarkerClick}
                        title="Click to view on Google Maps"
                    />
                </GoogleMap>
            )}
        </LoadScript>
    );
}