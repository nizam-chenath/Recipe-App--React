import React,  { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import AddToCart from "./AddToCart";
// step-4
import { AllMenuContext } from "./AllMenuContext";

function SpecialDishes(props){
    let [showPopup, setShowPopup] = useState(false);
    let [currentDish, setCurrentDish] = useState('')
    let [addToCartItem, setAddToCartItem] = useState([{}])

    

    const allMenu = useContext(AllMenuContext)
    
// show popup
    function showPopupHandler(dishName){
        setShowPopup(true)
        setCurrentDish(dishName)
    }
// close popup
    function closePopupHandler(){
        setShowPopup(false)
    }

    // add to carthandler
     function addToCartHandler(addToCartImg, addToCartTitle){
         setAddToCartItem(
             [
                 ...addToCartItem,
                {
                    "img" : addToCartImg,
                    "title" : addToCartTitle
                }
             ]
         )
     }


    let maxSpecialDishes = 8;
    
    let specialMenus = allMenu.map((menuItem, index)=>{
        if(index < maxSpecialDishes){
            return   <CardDish 
             menuItem = {menuItem}
             showPopupHandler = {showPopupHandler}
             />; 
        }
    });

    return(
    
       <section className="special-dishes">
           {showPopup && <Popup 
           closePopupHandler={closePopupHandler} 
           currentDish ={currentDish}
           addToCartHandler={addToCartHandler}
            ></Popup>}

           <div className="container">
               <AddToCart addToCartItem={addToCartItem}/>
               <div className="special-dishes-content text-center">
               <h2>Our Special Dishes</h2>
               <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est obcaecati impedit dolorum eius sint non incidunt? Veritatis alias vel incidunt voluptates magni repudiandae ullam quam?</h6>
               </div>
               <div className="special-dishes-list">
                   <ul className="flex flex-wrap gap-30">
                       {specialMenus}
                   </ul>
               </div>
           </div>
       </section>
   )
}


export default SpecialDishes;