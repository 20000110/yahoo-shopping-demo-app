// server.js
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

// 跨域允许设置
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// 代理接口：/api/item
app.get('/api/item', async (req, res) => {
  const { query } = req.query;

  try {
    const response = await fetch(
      `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=dj00aiZpPVN5MFF1eE9nRm00TiZzPWNvbnN1bWVyc2VjcmV0Jng9YWE-&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Yahoo API fetch failed' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});
