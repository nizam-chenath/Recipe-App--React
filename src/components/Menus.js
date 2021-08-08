import React, {useState, useEffect} from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loader from "./Loader";

function Menus(){

    let [menu, setMenu] = useState([]);
    let [menuCategory, setMenuCategory] = useState([]);
    let [loading, setLoading] = useState(false);

    async function getAllTheMenus(){
        setLoading(true)
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals);
        setLoading(false);
    }
    
    async function getAllTheCategories(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL);
        let categoryData = await response.json();
        setMenuCategory(categoryData.categories);
       
    }
   
    useEffect(()=>{
        getAllTheMenus();
        getAllTheCategories();
    },[]);
    
    return(
        
        <div>
            <Hero />
            {!loading ?    <SpecialDishes specialMenu={menu} />  : <Loader/>}
            {!loading ? (
                <FilteredDishes allMenuCategories={menuCategory} allMenus={menu}/>
             ) : null}
            
        </div>  
        )
    
}

export default Menus;