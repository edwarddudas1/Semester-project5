import { useEffect, useState } from "react";
import './News.css'

export default function Modal() {
  const [visible, setVisible] = useState(2);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=99bcd0e53b97487a874e59baffb3aa2c");
        const data = await response.json();
        console.log(data);
        setArticles(data.articles || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>


  return (
    <>
      <h2>Interacting with our pets</h2>
      <div className="modal">
        <div className="baby-modal">
          {articles.slice(0, visible).map((article, index) => (
            <section key={index}>
              <img src={article.urlToImage && article.urlToImage.trim() !== "" ? article.urlToImage : "https://picsum.photos/200/300"} alt={article.description} />
              <p>{article.description}</p>
            </section>
          ))}
        </div>
      </div>
      {visible < articles.length && (
        <button onClick={() => setVisible((prev) => prev + 4)} className="see-more">See more</button>
      )}
    </>
  );
}