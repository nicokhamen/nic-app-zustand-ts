import "./App.css";

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from "./routes/Routes";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
      <AppRoutes />
    </BrowserRouter>
    </>
  );
}

export default App;
