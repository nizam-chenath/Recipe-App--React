import React from 'react'

function Pagination(props) {

    let numberOfPages = [];
    for(let i=1; i <= Math.ceil(props.filteredDishes.length/ props.itemsPerPage); i++){
       numberOfPages.push(i);
    }
    
    function showNextDishesHandler (){
        console.log("net dishes when click")
    }

    let pages = numberOfPages.map((item) => {
        return(
            <li onClick={showNextDishesHandler}>{item}</li>
        )
    });
    
    return (
        <section>
        <ul className="pagination flex">
            {pages}
        </ul>
        </section>
    );
}

export default Pagination;
