import React, {useContext} from 'react'
import { AllMenuContext } from './AllMenuContext'

function Popup({closePopupHandler, currentDish, fullMenu,addToCartHandler}) {
   
    const allMenu = useContext(AllMenuContext)

    let dishDetails = allMenu.filter((menuItem)=>{
         return menuItem.strMeal == currentDish
    }).map((item)=>{
        return(
            <div className="popup-content-data">
                <div className="popup-image">
                <img src={item.strMealThumb} alt="" />
                <h5 className="popup-image-category">{item.strCategory}</h5>
                </div>
                <h2>{item.strMeal}</h2>
                <p>{item.strInstructions}</p>

                <ul className="dish-ingredients flex">
                    <li>{item.strIngredient1}</li>
                    <li>{item.strIngredient2}</li>
                    <li>{item.strIngredient3}</li>
                    <li>{item.strIngredient4}</li>
                </ul>
                <button
                 onClick={()=> addToCartHandler(item.strMealThumb, item.strMeal) }>
                     Order Now</button>
                <h5 className="popup-close" onClick={closePopupHandler}>close</h5>
            </div>
        )
    })

    return (
        <div className="popup">
            <div className="popup-content">
                    {dishDetails}  
            </div>
        </div>
    )
}

export default Popup
