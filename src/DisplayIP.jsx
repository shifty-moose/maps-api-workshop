import React, { useEffect } from "react";

const DisplayIP = () => {
    const [ip, setIP] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [flag, setFlag] = React.useState("");

    const fetchIP = async () => {
        const apiKey = import.meta.env.VITE_APP_API_KEY;

        try {

            console.log("fetching data");
            let response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`);
            let data = await response.json();

            let ip = data.ip;
            let location = data.location.city;
            let country = data.location.country;

            setIP(ip);
            setLocation(location);
            setCountry(country);
        
            console.log("This is the ip address: " + ip);
            console.log("This is the location: " + location);
            console.log("This is the country name: " + country);

        
            if (country) { 
                console.log("fetching flag");
        
                response = await fetch(`https://restcountries.com/v3.1/alpha/${data.location.country}`);
                data = await response.json();

                console.log(data[0]);

                let flag = data[0].flag;
                let country = data[0].name.common;

                setCountry(country);
                setFlag(flag);

                console.log("Changed the country name to: " + country);
                console.log("Set the flag to: " + flag);



            } else {
                console.log("Country is empty or undefined");
            };
        
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchIP();
    }, []);

    return (
        <div id="infoDiv">
            <div id="ipInfo">
                <h4>Your IP Address is: {ip}</h4>
                <h5>Your location is: {location}, {country}</h5>
            </div>

            <div id="flagDiv">
                <h1>{flag}</h1>
            </div>
        </div>
    );
};

export default DisplayIP;
