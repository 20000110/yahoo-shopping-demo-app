import { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');


  const handleClick = async () => {
    const url = `http://localhost:3001/api/item?query=${encodeURIComponent(keyword)}`;


    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('商品データ:', data);
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>商品検索</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="キーワードを入力してください"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button onClick={handleClick} style={{ marginLeft: '10px', padding: '10px 20px' }}>
        検索
      </button>
    </div>
  );
}

export default App;


