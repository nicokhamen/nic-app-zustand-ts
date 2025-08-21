import { useEffect } from "react";
import useProductStore from "../../store/productStore";
import ProductCard from "../../components/products/ProductCard";
import "./Product.css";
import LoadingSpinner from "../../components/common/loader/LoadingSpinner";
import { useCartStore } from "../../store/cartStore";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const { products, loading, error, fetchProducts } = useProductStore();
  const { count } = useCartStore(); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Oops {error}</div>;

  return (
    <section className="product-listing">
      <div className="product-header">
        <h1 className="page-title">Our Products</h1>
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          <span style={{ fontSize: '30px' }}>🛒</span>
          {count > 0 && <span className="badge">{count}</span>}
        </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;