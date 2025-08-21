import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../store/cartStore";
import CartIcon from "../../common/cart/CartIcon";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const totalItems = useCartStore((state) => state.getTotalItems());

  const handleCartClick = () => {
    navigate("/cart");
  };
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo" onClick={handleLogoClick}>
          Tom-Nic
        </h1>
        <div className="header-actions">
          <CartIcon itemCount={totalItems} onClick={handleCartClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
