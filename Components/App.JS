import React from "react";
import "./styles.css";
import Nav from "./components/Nav";
import NewsBoard from "./components/NewsBoard";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <div className="container mt-4">
        <NewsBoard />
      </div>
    </div>
  );
}
