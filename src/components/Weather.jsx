import {useWeather} from "../hooks/useWeather";
import refreshImage from "../assets/image/refresh1.png";
import heartImage from "../assets/image/heart.png";
import deleteImage from "../assets/image/delete.png";
import "./WeatherStyles.css";

export default function Weather() {
    const { data, error, isLoading, setData} = useWeather("Kyiv");

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div> {error.message}</div>;

    return (
        <div className="weather-cards">
            {data.slice(0, 3).map((card, idx) => (
                <div key={idx} className="weather-card">
                    <div className="weather-card-header" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <p className="weather-cards-city">{card.cityName}</p>
                        <p className="weather-cards-country">{card.country}</p>
                    </div>
                    <div className="weather-card-time" style={{ margin: '16px 0 8px 0' }}>
                        <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{card.time}</p>
                        <button style={{
                            background: 'rgba(255, 179, 108, 1)',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '4px 16px',
                            color: 'black',
                            fontWeight: 'bold',
                            margin: '8px 0'
                        }}>Hourly forecast</button>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', fontSize: '16px', color: '#222' }}>
                            <span>{card.day}</span>
                            <span>{card.date}</span>
                            <span>|</span>
                            
                        </div>
                    </div>
                    <img className="weather-card-icon" src={card.icon} alt="" style={{ width: '100px', height: '100px', margin: '12px 0' }} />
                    <h3 className="temperature" style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>{card.temp}&deg;C</h3>
                    <div className="weather-cards-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '16px' }}>
                        <img src={refreshImage} alt="Refresh" style={{ width: '28px', cursor: 'pointer' }} />
                        <img src={heartImage} alt="Favorite" style={{ width: '28px', cursor: 'pointer' }} />
                        <button style={{
                            background: 'rgba(255, 179, 108, 1)',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '4px 16px',
                            color: 'black',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>See more</button>
                        <img src={deleteImage} alt="Delete" style={{ width: '28px', cursor: 'pointer' }} />
                    </div>
                </div>
            ))}
        </div>
    );
}