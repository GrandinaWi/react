import Home from "./pages/home";
import Header from "./components/header";
import {Routes, Route} from "react-router-dom";
import Cart from "./pages/cart";

function App() {

  return (
      <div className="wrapper">
        <Header price={0} count={0}/>
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />

            </Routes>
        </div>
      </div>
  );
}

export default App;
