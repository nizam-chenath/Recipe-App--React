import React, {useState, useEffect} from "react";

function Menus(){

    let [menu, setMenu] = useState([])

    async function getAllMenus(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let response = await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
    }

    useEffect(()=>{
        getAllMenus()
    },[])

     let menuImages = menu.map((item)=>{
        return(
            <div>
                <img src={item.strMealThumb} />
                <h2>{item.strCategory}</h2>
            </div>
        )
    })

    return(
        <div>
            {menuImages}
        </div>
    )
}

export default Menus;