import React, {useState, useEffect} from "react";
import Hero from "./Hero.jsx";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loader from "./Loader";

function Menus(){

    let [menu, setMenu] = useState([]);
    let [menuCategory, setMenuCategory] = useState([]);
    let [loading, setLoading] = useState(false);
    let [singleDish, setSingleDish] = useState([]);

    async function getAllTheMenus(){
        setLoading(true)
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL);
        let data = await response.json()
        setMenu(data.meals);
        setLoading(false);
    }
    
    async function getAllTheCategories(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL);
        let categoryData = await response.json();
        setMenuCategory(categoryData.categories);
       
    }
    async function getOnlyOneDish(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response = await fetch(API_URL);
        let singleDishData = await response.json();
        setSingleDish(singleDishData.meals)
       
    }
   
    useEffect(()=>{
        getAllTheMenus();
        getAllTheCategories();
        getOnlyOneDish();
    },[]);
    
    return(
        
        <div>
            <Hero />
            {!loading ?    <SpecialDishes specialMenu={menu} />  : <Loader/>}
            {!loading ? (
                <FilteredDishes
                 allMenuCategories={menuCategory}
                 allMenus={menu}
                 singleDish = {singleDish}
                 setSingleDish = {setSingleDish}/>
             ) : null}
            
        </div>  
        )
    
}

export default Menus;