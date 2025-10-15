const API_KEY = "1156cd29e714591bcb5a708b765d1d5f";

export const getHourlyForecast = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  console.log(res);

  if (!res.ok) {
    throw new Error("couldnt fetch data");
  }

  return res.json();
};

export const getCurrentForecast = async (city) => {
  const res = await fetch(
    ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&unit=metric`
  );

  console.log(res);

  if (!res.ok) {
    throw new Error("couldnt fetch data");
  }

  return res.json();
};

export const getWeeklyForecast = async (city) => {
  const res = await fetch(
    ` https://api.openweathermap.org/data/2.5/onecall?appid=${API_KEY}&unit=metric`
  );

  console.log(res);

  if (!res.ok) {
    throw new Error("couldnt fetch data");
  }

  return res.json();
};


