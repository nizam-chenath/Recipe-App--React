import React, {useState, useContext, useEffect} from 'react';
import Pagination from './Pagination';
import CardDish from './CardDish';
import { AllMenuContext } from './AllMenuContext';

function FilteredDishes(props) {

  let [menuCategory, setMenuCategory] = useState([]);
  let [singleDish, setSingleDish] = useState([]);
  let allMenus = useContext(AllMenuContext)
  let [filteredDishes, setFilteredDishes] = useState([])
  let [activeDish, setActiveDish] = useState("Beef")
  let [currentPage, setCurrentPage] = useState(1)
  let [itemsPerPage, setItemsPerPage] = useState(4)
  let indexOfLastDish = currentPage * 3;
  let indexOfFirstDish = indexOfLastDish - 3;
  let showThisDishesNow = filteredDishes.slice(indexOfFirstDish, indexOfLastDish)

 
  async function getAllTheCategories(){
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
      let response = await fetch(API_URL);
      let categoryData = await response.json();
      setMenuCategory(categoryData.categories);
  }
  async function getOnlyOneDish(){
      const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
      let response = await fetch(API_URL);
      let singleDishData = await response.json();
      setSingleDish(singleDishData.meals)
  }
  useEffect(()=>{
      getAllTheCategories();
      getOnlyOneDish();
  },[]);


  let maxItem = 6
  let singleDishItems = singleDish.map((item, index)=>{
    if(index < maxItem){
      return(
        <li>
          <img src={item.strMealThumb} className="br-10" alt="" />
          <h5>{item.strMeal}</h5>
        </li>
      )  
    }
   
  })

  //show dishes on click
  function showFilterdDishesHandler (category){
    setSingleDish([])
    setActiveDish(category)
    let filteredDishesAre = allMenus.filter((item)=>{
      return item.strCategory === category
    }).map((menuItem)=>{
      return(
       <CardDish menuItem={menuItem}/>
      )
    })
    setFilteredDishes(filteredDishesAre)
  }

  //let show all the categories
    let allCategories = menuCategory.map((item)=>{
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
