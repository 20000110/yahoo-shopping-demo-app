// src/pages/CategoryPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CategoryPage = () => {
  const { keyword } = useParams(); 
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCategoryItems = async () => {
      const url = `http://localhost:3001/api/item?query=${encodeURIComponent(keyword)}`;
      const res = await fetch(url);
      const data = await res.json();
      setItems(data.hits);
    };

    fetchCategoryItems();
  }, [keyword]);

  return (
    <div style={{ padding: '40px' }}>
      <h2>{keyword} </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((item, i) => (
          <div key={i} style={{ width: 200, margin: 10, textAlign: 'center' }}>
            <img src={item.image.medium} alt={item.name} style={{ width: '100%' }} />
            <p>{item.name}</p>
            <p>{item.price}円</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryPage;
