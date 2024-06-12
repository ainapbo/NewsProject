import React, { useEffect, useState } from 'react';


const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/news')
      .then(response => response.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div>
      <h1>Daftar Berita</h1>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p><strong>Kategori:</strong> {item.category}</p>
            <p>{item.summary}</p>
            <p><strong>Kata Kunci:</strong> {item.keywords.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

