import {useEffect, useState} from "react";
import logo from './assets/img/pizza-logo.svg';
import Basket from "./components/button";
import Header from "./components/header";
import data from './data.json';
import Pizza from "./components/pizza";
import Sort from "./components/sort";

console.log(data)

function App() {
  const [price,setPrice]=useState(0);
  const [count,setCount]=useState(0)
  const [collections,setCollections]=useState([]);
  const [category,setCattegory]=useState([]);
  const [changeTab,setChangeTab]=useState(0);
  const [sort,setSort] = useState(false);
  const [picksort,setPickSort]=useState(0);
  useEffect(() => {
    setCollections(data.items);
    setCattegory(data.category)
  }, []);
  function onChangeTab(index){
    setChangeTab(index)
  }
  function openModal(){
    if (sort==true){
      setSort(false)
    }else{
      setSort(true)
    }
  }
  function changeSort(index){
    setPickSort(index)
  }
  return (
      <div className="wrapper">
        <Header price={price} count={count}/>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <div className="categories">
                <ul>
                  {
                    data.category.map((obj,index)=> (
                        <li onClick={()=>onChangeTab(index)} key={index} className={index == changeTab ? 'active' : ''}>{obj.name}</li>
                    ))
                  }
                </ul>
              </div>
              <Sort changeSort={changeSort} sort={sort} openModal={openModal} picksort={picksort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                collections.filter((obj)=>{
                  if (changeTab==0) {
                    return true
                  }else {
                    return obj.category === changeTab;
                  }
                }).sort((a, b) => {
                  if (picksort === 0) {
                    return b.popular - a.popular; // Сортировка по популярности от большего к меньшему
                  } else if (picksort === 1) {
                    return a.baseprice - b.baseprice; // Сортировка по цене от меньшего к большему
                  } else if (picksort === 2) {
                    return a.name.localeCompare(b.name); // Сортировка по алфавиту от A до Z
                  } else {
                    return 0; // Без сортировки
                  }
                }).map((obj,index)=>(
                    <Pizza
                        key={index}
                        {...obj}
                    />
                ))
              }
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
