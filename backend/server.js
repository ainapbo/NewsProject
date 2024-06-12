const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const newsData = [
  {
    id: 1,
    title: 'Berita 1',
    category: 'Kategori 1',
    summary: 'Ringkasan berita 1',
    keywords: ['berita', 'kategori1', 'ringkasan1']
  },
  {
    id: 2,
    title: 'Berita 2',
    category: 'Kategori 2',
    summary: 'Ringkasan berita 2',
    keywords: ['berita', 'kategori2', 'ringkasan2']
  },
  {
    id: 3,
    title: 'Berita 3',
    category: 'Kategori 3',
    summary: 'Ringkasan berita 3',
    keywords: ['berita', 'kategori3', 'ringkasan3']
  }
];

app.get('/news', (req, res) => {
  res.json(newsData);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
