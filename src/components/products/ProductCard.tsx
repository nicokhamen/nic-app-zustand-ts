import { Product } from "../../entities/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
    return (
<>
<div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image"
        />
      </div>
       <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-category">{product.category}</p>
        <div className="product-rating">
          <span>{product.rating.rate}</span>
          <span>({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
</>
    )
};

export default ProductCard;