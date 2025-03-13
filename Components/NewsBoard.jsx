import NewsItem from "./NewsItem";

import React, { useEffect, useState } from "react";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = "f28b8902c3fa8b0a8e22861999367507"; // Use your actual API key
  const category = "general";
  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          throw new Error("No articles found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []); // Runs only once when the component mounts

  return (
    <div className="news-container">
      <h2 className="news-heading">
        <span>📰 Latest News</span>
      </h2>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              <img
                src={article.image}
                alt={article.title}
                className="news-image"
              />
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
