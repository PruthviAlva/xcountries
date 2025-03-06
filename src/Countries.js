import { useEffect, useState } from 'react';
import CountrieCard from './CountrieCard';

function Countries() {

    const API = "https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        try {
            fetch(API)
                .then(response => response.json())
                .then(data => setCountries(data));
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
        }}>
            {
                countries.map(country => <CountrieCard country={country} />)
            }
        </div>
    );
}

export default Countries;