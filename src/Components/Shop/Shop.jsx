import React, { useEffect, useState } from "react";
 import "./shop.css";
    const travelKeywords = [
  "bag", "backpack", "jacket", "coat", "shoe",
  "sneaker", "watch", "cotton short", "short sleeve",
  "t-shirt", "clothing", "travel bag", "rucksack", "slim fit"
];
 const Shop = () => { 
  const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const filteredData = data.filter(item =>
        travelKeywords.some(keyword =>
          item.title.toLowerCase().includes(keyword)
        )
      );

      const mappedData = filteredData.map((item) => ({
        id: item.id,
        name: item.title,
        price: Math.round(item.price * 280),
        category: "Travel Essentials",
        image: item.image,
        buyUrl: `https://www.daraz.pk/catalog/?q=${encodeURIComponent(item.title)}`
      }));

      setProducts(mappedData);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      setLoading(false);
    });
},[]); 
if (loading) { 
  return <h2 style={{ textAlign: "center"}}>Loading Shop...</h2>; 
 } 
 return ( <section className="shop"> 
 <h2 className="shopTitle">Travel Shop</h2> 
 <p className="shopDesc">Buy travel essentials from trusted stores</p> 
 <div className="productGrid"> {products.map((item) => ( <div className="productCard" key={item.id}> 
 <img src={item.image} alt={item.name} /> <h3>{item.name}</h3>
 <p className="category">{item.category}</p> 
 <p className="price">PKR {item.price}</p> 
 <a href={item.buyUrl} target="_blank" rel="noopener noreferrer" className="btn" > Buy Now </a> </div> ))} 
 </div>
  </section> 
  );
   }; 
export default Shop;


