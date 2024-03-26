import Basket from "./button";
import logo from "../assets/img/pizza-logo.svg";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';



function Header(){
    const price=useSelector(state => state.count.price);
    const count=useSelector(state => state.count.count);
    console.log('Это цена',price)
    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </Link>
                <div  className="header__cart">
                    <Link to='/cart'>
                    <Basket price={price} count={count}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;