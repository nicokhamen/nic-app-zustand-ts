import { useEffect } from "react";
import useProductStore from "../../store/productStore";
import ProductCard from "../../components/products/ProductCard";
import "./Product.css";

const ProductList = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Loading ....</div>;
  if (error) return <div>Oops {error}</div>;

  return (
    <>
      <section className="product-listing">
        <h1 className="page-title">Our Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductList;
