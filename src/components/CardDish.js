import React from 'react'

function CardDish(props) {
    return (
             <li>
                    <img src= {props.menuItem.strMealThumb} className="br-10" />
                    <h5>{props.menuItem.strMeal}</h5>
                    
             </li>
    )
}

export default CardDish
