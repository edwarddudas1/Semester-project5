import { useState, useEffect } from "react";

const API_KEY = "1156cd29e714591bcb5a708b765d1d5f";

export function useWeather(city) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!city) return;

    const fetchWeatherData = async () => {
      try {
        setLoading(true);

        const res = await getHourlyForecast(city);

        const cityName = res.city.name;
        const country = res.city.country;

        const forecastData = res.list.map((item) => {
          const date = new Date(item.dt * 1000);
          return {
            cityName,
            country,
            date: date.toLocaleDateString("en-EN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            time: date.toLocaleTimeString("en-EN", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            temp: item.main.temp,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
          };
        });

        if (!res.ok) {
          throw new Error("failed to download data");
        }

        // data = await res.json();
        setData(forecastData);
      } catch (err) {
        setError(err.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  return { data, error, loading };
}
