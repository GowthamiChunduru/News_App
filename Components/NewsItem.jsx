export default function NewsItem({ title, description, src, url }) {
  return (
    <div className="card h-100">
      <img
        src={src || "https://via.placeholder.com/345"}
        className="card-img-top"
        alt="News"
      />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title Available"}</h5>
        <p className="card-text">{description || "No Description Available"}</p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
