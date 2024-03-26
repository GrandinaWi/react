import {useEffect, useState,useCallback} from "react";
// компоненты товаров и сортировки
import Pizza from "../components/pizza";
import Sort from "../components/sort";
// редьюсер фильтра
import {filters} from "../redux/reducers/filters";
import { useSelector, useDispatch } from 'react-redux';


function Home(){

    const items = useSelector(state => state.pizzas.items); // Используем часть состояния из стора
    const categories = useSelector(state => state.filters.category); // Используем часть состояния из стора
    const sortStatus=useSelector(state=>state.filters.sortBy);
    // состояние указывающий выбранную категорию
    const [categoryName,setCategoryName]=useState('Все');
    // выбор  категории
    const [changeTab,setChangeTab]=useState(0);
    // состояние выбора сортировка и  ее название, и открытие и закрытие модального окна
    const [sort,setSort] = useState(false);
    const [picksort,setPickSort]=useState(0);
    const [sortName,setSortName]=useState('популярности');
    const dispatch = useDispatch();

    function onChangeTab(index,name){
        setChangeTab(index)
        setCategoryName(name)
    }
    function openModal(){
        if (sort==true){
            setSort(false)
        }else{
            setSort(true)
        }
    }
    function changeSort(index,name){
        setSortName(name);
    }
    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <ul>
                        {
                            categories.map((obj, index) => (
                                <li onClick={() => onChangeTab(index, obj.name)} key={index}
                                    className={index == changeTab ? 'active' : ''}>{obj.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <Sort
                    name={sortName}
                    changeSort={changeSort}
                    sort={sort}
                    openModal={openModal}
                    picksort={picksort}
                />

            </div>
            <h2 className="content__title">{categoryName} пиццы</h2>
            <div className="content__items">
                {
                    items.filter((obj) => {
                        if (changeTab == 0) {
                            return true
                        } else {
                            return obj.category === changeTab;
                        }
                    }).sort((a, b) => {
                        if (sortStatus === 0) {
                            return b.rating - a.rating; // Сортировка по популярности от большего к меньшему
                        } else if (sortStatus === 1) {
                            return a.price - b.price; // Сортировка по цене от меньшего к большему
                        } else if (sortStatus === 2) {
                            return a.name.localeCompare(b.name); // Сортировка по алфавиту от A до Z
                        } else {
                            return 0; // Без сортировки
                        }
                    }).map((obj, index) => (
                        <Pizza
                            key={index}
                            {...obj}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;