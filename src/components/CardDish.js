import React from 'react'

function CardDish(props) {

    function showPopupHandler(){
        alert("popup")
    }
    return (
             <li>
                 <a href="javascript:;" onClick={showPopupHandler}>
                    <img src= {props.menuItem.strMealThumb} className="br-10" />
                    <h5>{props.menuItem.strMeal}</h5>
                 </a>
             </li>
    );
}

export default CardDish
