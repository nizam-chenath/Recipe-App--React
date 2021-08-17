import React, {useState, useEffect} from "react";
import Hero from "./Hero.jsx";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import {AllMenu} from "./AllMenuContext";

function Menus(){
    let [menuCategory, setMenuCategory] = useState([]);
    let [singleDish, setSingleDish] = useState([]);
   
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
        getAllTheCategories();
        getOnlyOneDish();
    },[]);
    return(
        <div>
            <Hero />
            <AllMenu>
            <SpecialDishes  /> 
             <FilteredDishes
                 allMenuCategories={menuCategory}
                 singleDish = {singleDish}
                 setSingleDish = {setSingleDish}/>
            </AllMenu>
        </div>  
        )
}

export default Menus;