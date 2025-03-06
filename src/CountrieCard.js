const CountrieCard = ({ country }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height: '200px',
            border: '1px solid',
            borderRadius: '5px',
        }}>
            <img src={country.flag} alt={`Flag of ${country.name}`} style={{ width: '85px', height: '85px' }} />
            <h3>{country.name}</h3>
        </div>
    );
}

export default CountrieCard;