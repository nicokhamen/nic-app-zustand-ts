import { Product } from "../../entities/Product";
import { useCartStore } from "../../store/cartStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuatity = useCartStore((state) => state.updateQuantity);

  const cartItems = useCartStore((state) => state.items);
   const currentItem = cartItems.find(item => item.id === product.id);
   const currentQuantity = currentItem ? currentItem.quantity : 0;

   const handleRemoveItem = () => {
    if(currentQuantity > 0) {
      updateQuatity(product.id, currentQuantity - 1);
    }
   }


  const handleAddToCart = () => {
    addItem({
      
      id: product.id, 
    price: product.price,
      title: product.title,
      image: product.image,
    })
    console.log("logged");
  }
  const removeItemFromCart = (id: number) => {
    removeItem(id);
  }

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
           <button onClick={handleRemoveItem}>-</button>
           <button onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </div>
</>
    )
};

export default ProductCard;