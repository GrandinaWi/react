import Basket from "./button";
import logo from "../assets/img/pizza-logo.svg";
function Header({price,count}){
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <Basket price={price} count={count}/>
                </div>
            </div>
        </div>
    )
}

export default Header;