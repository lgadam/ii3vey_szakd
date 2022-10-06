import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Wine from "./Pages/Wine";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";


const App = () => {
    const user = false;
    return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
            <Route path="/products/:category" element={<ProductList />} />
        </Routes>
        <Routes>
            <Route path="/product/:id" element={<Wine />} />
        </Routes>
        <Routes>
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
            <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>} />
        </Routes>
        <Routes>
            <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />
        </Routes>
    </Router>
    );
}

export default App;
