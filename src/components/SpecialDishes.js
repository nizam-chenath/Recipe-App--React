function SpecialDishes(props){

    let maxSpecialDishes = 8;
    
    let specialMenus = props.specialMenu.map((menuItem, index)=>{
        if(index < maxSpecialDishes){
            return(
                <li>
                    <img src= {menuItem.strMealThumb} className="br-10" />
                    <h5>{menuItem.strMeal}</h5>
                    
                </li>
            )
        }
      
    })

    return(
       <section className="special-dishes">
           <div className="container">
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