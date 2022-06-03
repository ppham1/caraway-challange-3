import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Collections from "./Collections";

//use axios to get product data from the given endpoint
const ProductList = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://www.allbirds.com/products.json?limit=150"
      );
      setProducts(res.data.products);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };
  //display each collection with its products
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Collections key={`key-${products.name}`} products={products} />
      </div>
    </div>
  );
};

export default ProductList;
