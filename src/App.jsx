import { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    console.log('検索キーワード：', keyword);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Yahooショッピング</h1>
      <input
        type="text"
        placeholder="何をお探しですか？"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ padding: '8px', width: '250px', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px 16px' }}>
        検索
      </button>
    </div>
  );
}

export default App;
