import React, {useState} from 'react';

function FilteredDishes(props) {

  console.log("menu:", props.allMenus)

  let [allMenus, setAllMenus] = useState(props.allMenus)
  let [filteredDishes, setFilteredDishes] = useState([])
  let [activeDish, setActiveDish] = useState()

  //show dishes on click
  function showFilterdDishesHandler (category){
    setActiveDish(category)
    let filteredDishesAre = allMenus.filter((item)=>{
      return item.strCategory === category
    }).map((item)=>{
      return(
        <li>
          <img src={item.strMealThumb} className="br-10" alt="" />
          <h5>{item.strMeal}</h5>
        </li>
      )
    })
    setFilteredDishes(filteredDishesAre)
  }

  //let show all the categories
    let allCategories = props.allMenuCategories.map((item)=>{
      return(
        <li className={item.strCategory== activeDish ? "active" : ""} onClick={()=>{showFilterdDishesHandler(item.strCategory)}}>{item.strCategory}</li>
      )
    })

    return <div className="filterd-dishes">
            <div className="container">
                <div className="text-center">
                  <h2>Choose Your Dishes</h2>
                  <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis sapiente itaque porro dolorum, ipsum dicta dolore omnis eum praesentium ut.</h6>
                </div>
                <div className="filterd-dishes">
                    <ul>
                       {allCategories}
                    </ul>
                </div>
                <div className="filterd-dishes-results">
                  <ul className="flex flex-wrap gap-30">
                    {filteredDishes.length > 1 ?   {filteredDishes}: <div className="alert"></div>}
                  </ul>
                </div>
            </div>
    </div>;
    
}

export default FilteredDishes;
