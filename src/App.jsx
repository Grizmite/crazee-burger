// App.jsx
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  
    
  );
}

export default App;
