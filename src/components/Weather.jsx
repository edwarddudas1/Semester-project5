export default function Weather() {
    // const {} = useWeather()

    const cards = [1, 2, 3];

    return (
        <div className="weather-cards">
            <ul className="weather-cards">
                {cards.map((card, idx) => (
                    <li key={idx} className={`weather-cards${card}`}>
                        <div className="Location">
                            <p></p>
                        </div>
                        <div className="weather-cards-time">
                            <p></p>
                            <button></button>
                            <p></p>
                        </div>
                        <img src="" alt="" />
                        <h3 className="temperture"></h3>
                        <div className="weather-cards-footer">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <button></button>
                            <img src="" alt="" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}