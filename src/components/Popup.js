import React from 'react'

function Popup({closePopupHandler, currentDish, fullMenu}) {

    let dishDetails = fullMenu.filter((menuItem)=>{
         return menuItem.strMeal == currentDish
    }).map((item)=>{
        return(
            <div className="popup-content-data">
                <div className="popup-image">
                <img src={item.strMealThumb} alt="" />
                <h5 className="popup-image-category">{item.strCategory}</h5>
                </div>
                <h2>{item.strMeal}</h2>
                <ul className="dish-ingredients flex">
                    <li>{item.strIngredient1}</li>
                    <li>{item.strIngredient2}</li>
                    <li>{item.strIngredient3}</li>
                    <li>{item.strIngredient4}</li>
                </ul>
            </div>
        )
    })

    return (
        <div className="popup">
            <div className="popup-content">
                    {dishDetails}
                    <button>Order Now</button>
                    <h5 className="popup-close" onClick={closePopupHandler}>close</h5>
            </div>
        </div>
    )
}

export default Popup
