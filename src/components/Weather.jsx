import { useWeather } from "../hooks/useWeather";
import refreshImage from "../components/assets/img/refresh.png";
import heartImage from "../components/assets/img/heart.png";
import deleteImage from "../components/assets/img/delete.png";
import "./WeatherStyles.css";

export default function Weather() {
  const { data, error, isLoading } = useWeather("Kyiv");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div> {error.message}</div>;

  return (
    <div className="weather-cards" style={{ margin: "30px 0" }}>
      {data.slice(0, 3).map((card, idx) => (
        <div key={idx} className="weather-card">
          <div
            className="weather-card-location"
            style={{
              display: "flex",
              justifyContent: "space-between",

              width: "100%",
            }}
          >
            <p className="weather-cards-city">{card.cityName}</p>
            <p className="weather-cards-country">{card.country}</p>
          </div>
          <div className="weather-card-time">
            <p>{card.time}</p>
            <button
              style={{
                width: "114px",
                height: "auto",
                background: "rgba(255, 179, 108, 1)",
                border: "none",
                borderRadius: "8px",
                padding: "4px 16px",
                color: "black",
                fontWeight: "500",
                margin: "8px 0",
              }}
            >
              Hourly forecast
            </button>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                color: "#222",
              }}
            >
              <span>{card.day}</span>
              <span>{card.date}</span>
            </div>
          </div>
          <img
            className="weather-card-icon"
            src={`https://openweathermap.org/img/wn/${card.weather.icon}@2x.png`}
            alt="weather-icon"
            style={{ width: "100px", height: "100px", margin: "12px 0" }}
          />
          <h3
            className="temperature"
            style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}
          >
            {card.temp}&deg;C
          </h3>
          <div
            className="weather-cards-footer"
            style={{
              display: "flex",
              justifyContent: "space-between",

              width: "100%",
              marginTop: "16px",
            }}
          >
            <img
              className="weather-cards-footer-img-refresh"
              src={refreshImage}
              alt="Refresh"
            />
            <img
              className="weather-cards-footer-img-heart"
              src={heartImage}
              alt="Favorite"
            />
            <button className="weather-cards-footer-button">See more</button>
            <img
              className="weather-cards-footer-img-delete"
              src={deleteImage}
              alt="Delete"
              style={{ width: "28px", cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
