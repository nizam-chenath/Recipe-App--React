import React, {useState, useEffect} from "react";
import Hero from "./Hero.jsx";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import {AllMenu} from "./AllMenuContext";

function Menus(){
   
    return(
        <div>
            <Hero />
            <AllMenu>
            <SpecialDishes  /> 
             <FilteredDishes/>
            </AllMenu>
        </div>  
        )
}

export default Menus;