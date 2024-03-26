// импорт страницы
import Home from "./pages/home";
import Header from "./components/header";
import Cart from "./pages/cart";
import {Routes, Route} from "react-router-dom";
// импорт товаров
import pizzaItems from './pizza.json';
import {useEffect} from "react";
// импорт категории
import category from './data.json';
// импорт хранилища
import store from "./redux/store";
// импорт добавления в redux категории и товаров
import {setPizzas} from "./redux/actions/pizzas";
import {setCategory, setSort} from "./redux/actions/filters";

function App({items}) {

    useEffect(() => {
        store.dispatch(setPizzas(pizzaItems.pizzas))
        store.dispatch(setCategory(category.category))
    }, []);
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
            <Routes>
                <Route path="/"  element={<Home items={items} />} />
                <Route path="/cart" element={<Cart />} />

            </Routes>
        </div>
      </div>
  );
}

export default App;

