import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Wine from "./Pages/Wine";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

const App = () => {
    const user = useSelector(state => state.user.currentUser);
    return (
    <Router>
        <Routes>
            <Route exact path="/" index element={<Home />} />
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
            <Route path="/success" element={<Success />} />
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
