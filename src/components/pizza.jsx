import {useEffect, useState} from "react";
import PropTypes from "prop-types";


function Pizza(obj){
    const [type,setType]=useState(0)
    const [radiusPick,setRadius]=useState(0);
    function clickType(index){
        setType(index);
    }
    function clickRaduis(index){
        setRadius(index)
    }



    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={obj.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{obj.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        obj.types.map((material,index)=> (
                            <li key={index} onClick={()=>clickType(index)} className={index==type ? 'active' : 'disable'}>{ material===0 ? 'тонкое' : 'традиционное'}.</li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        obj.sizes.map((radius,index)=> (
                            <li key={index} onClick={()=>clickRaduis(index)} className={index==radiusPick ? 'active' : 'disable'}>{radius} см.</li>
                        ))
                    }


                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {obj.price} ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span >Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    )
}
Pizza.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
};
Pizza.defaultProps={
  name: '-----',
  price: 0,
    types: [],
    sizes: [],
};
export default Pizza;