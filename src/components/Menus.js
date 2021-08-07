import React, {useState, useEffect} from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";

function Menus(){

    let [menu, setMenu] = useState([]);

    async function getAllTheMenus(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals);
    }

    useEffect(()=>{
        getAllTheMenus();
    },[]);

     

    return(
        <div>
            <Hero />
            <SpecialDishes specialMenu={menu} />
        </div>  
        )
    
}

export default Menus;