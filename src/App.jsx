import { Routes, Route } from "react-router-dom";
import LoginPage from './components/pages/login/LoginPage';
import ErrorPage from './components/pages/Error/ErrorPage';
import OrderPage from "./components/pages/Order/OrderPage";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={ <ErrorPage /> } />
      <Route path="/order" element={<OrderPage />} />

    </Routes>
  
    
  );
}

export default App;
