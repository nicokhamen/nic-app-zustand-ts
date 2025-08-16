import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import "./Home.css";


const Home = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const routeToProducts = () => {
    navigate("/products");
  }

  return (
    <>
    <div className="container">
      <h1>Welcome, {user}!</h1>
      <button onClick={logout}>Logout</button>
      <br/>
      <button onClick={routeToProducts}>View All Products</button>
    </div>
    </>
  );
};

export default Home;