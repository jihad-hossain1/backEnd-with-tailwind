import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/category').then(res => res.json()).then(data => { setCategories(data)})
    
  },[])
  return <>
    <div className="px-3 py-2">
      <h2 className="text-xl font-bold mb-1">All Category Here :</h2>
      {
        categories.map(category =>
          <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="grid ml-7 hover:font-semibold"
          >
            
            {category.category}
            
        </Link>)
      }
    </div>
  </>;
};

export default LeftNav;
