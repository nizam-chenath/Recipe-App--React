import React, {useState} from 'react';
import Pagination from './Pagination';

function FilteredDishes(props) {

  console.log("single dishes", props.singleDish)

  let [allMenus, setAllMenus] = useState(props.allMenus)
  let [filteredDishes, setFilteredDishes] = useState([])
  let [activeDish, setActiveDish] = useState("Beef")
  let [currentPage, setCurrentPage] = useState(1)
  let [itemsPerPage, setItemsPerPage] = useState(4)

  let indexOfLastDish = currentPage * 4;

  let indexOfFirstDish = indexOfLastDish - 4;
 console.log("currentPage", currentPage)
  let showThisDishesNow = filteredDishes.slice(indexOfFirstDish, indexOfLastDish)

console.log("haloo" + indexOfFirstDish,indexOfLastDish);

  //show only single dishes
  let singleDishItems = props.singleDish.map((item)=>{
    return(
      <li>
        <img src={item.strMealThumb} className="br-10" alt="" />
        <h5>{item.strMeal}</h5>
      </li>
    )  
  })

  //show dishes on click
  function showFilterdDishesHandler (category){
    props.setSingleDish([])
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
                    {singleDishItems}
                    {singleDishItems !=0 || filteredDishes.length !=0 ?   showThisDishesNow : 
                    <div className="alert">
                        <h3>Sorry,No Items Found</h3>
                        <h4>Please choose another dishes:)</h4>
                    </div>}
                  </ul>
                </div>
                <Pagination 
                filteredDishes = {filteredDishes}
                itemsPerPage = {itemsPerPage}
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
                > </Pagination>
            </div>
    </div>;
    
}

export default FilteredDishes;
