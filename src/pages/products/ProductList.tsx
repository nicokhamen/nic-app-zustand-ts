import { useEffect } from "react";
import useProductStore from "../../store/productStore";
import ProductCard from "../../components/products/ProductCard";
import "./Product.css";
import LoadingSpinner from "../../components/common/loader/LoadingSpinner";



const ProductList = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return (<>
  <LoadingSpinner />
  </>);
  if (error) return <div>Oops {error}</div>;

  return (
    <>
      <section className="product-listing">
      
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
