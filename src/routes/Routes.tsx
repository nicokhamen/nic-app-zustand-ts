import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Login from '../pages/login/Login';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/home/Home';
import ProductList from '../pages/products/ProductList';

const AppRoutes = () => {
    return(
        <ReactRoutes>
            <Route path="/login" element={<Login/>} />
            <Route element={<ProtectedRoute/>}>
            <Route path="/home" element={<Home/>} />
            {/* The protected routes will go in here */}
            <Route path="/products" element={<ProductList />} />
            
            {/* wild card route */}
            <Route path="*" element={<Login />} />
            </Route>

        </ReactRoutes>
    )
}
export default AppRoutes;