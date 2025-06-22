import { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');
  const [items, setItems] = useState([]);

  const handleClick = async () => {
    if (!keyword) return;
    const url = `http://localhost:3001/api/item?query=${encodeURIComponent(keyword)}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setItems(data.hits);
    } catch (err) {
      console.error('エラー:', err);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Yahooショッピング</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="何をお探しですか？"
        style={{ padding: '10px', fontSize: '16px', width: '250px' }}
      />
      <button onClick={handleClick} style={{ marginLeft: '10px', padding: '10px 20px' }}>
        検索
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
        {Array.isArray(items) &&
          items.map((item, i) => (
            <div key={i} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
              <h3>{item.name}</h3>
              <img src={item.image.medium} alt={item.name} style={{ width: '100%' }} />
              <p>価格: {item.price}円</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
