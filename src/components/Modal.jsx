import React, { use } from "react";
import {useEffect, useState} from "react";
import plane from "../img/plane.jpg";
import shark from "../img/shark.jpg";
import error from "../img/error.jpg";
import tiRex from "../img/Ti-rex.jpg";
import "./Modal.css";

export default function Modal() {
  const [articles, setArticles] = useState([]);
  useEffect(() => { 
    const fetchData = async() =>{
    try {
      const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-09-07&sortBy=publishedAt&apiKey=99bcd0e53b97487a874e59baffb3aa2c");
      const data = await response.json();
      console.log(data);
      setArticles(data.articles)
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, []);
  if (!articles.length) return <div>Loading...</div>


    return (
      <>
        <h2>Interacting with our pets</h2>
        <div className="modal">
          <div>
            {articles.slice(0, 3).map((article, index) => (
              <section key={index}>
                <img src={article.urlToImage} alt={article.description} />
                <p>{article.description}</p>
              </section>
            ))}
          </div>
        </div>
        <button className="see-more">See more</button>
      </>
    );
}