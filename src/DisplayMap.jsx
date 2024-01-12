import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const DisplayMap = () => {
    const [ip, setIP] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [lat, setLat] = React.useState("");
    const [lng, setLng] = React.useState("");

    const fetchIP = async () => {
        const apiKey = import.meta.env.VITE_APP_API_KEY;

        try {
        const response = await fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
        );
        const data = await response.json();
        setIP(data.ip);
        setLocation(data.location.city);
        setCountry(data.location.country);
        setLat(data.location.lat);
        setLng(data.location.lng);
        } catch (e) {
        console.log(e);
        }
    };

    useEffect(() => {
        fetchIP();
    }, []);


    return (
        <>
        {lat  ? (
        <div id="map">
            <MapContainer center={[lat, lng]} zoom={13} style={{ height: '500px', width: '100%', borderRadius: '10px' }} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
                <Popup>A pretty CSS3 popup. &lt;br /&gt; Easily customizable.</Popup>
            </Marker>
            </MapContainer>
        </div>
        ) : (
        <div>Loading...</div>
        )}
        </>
    )
};

export default DisplayMap;
