import React from 'react'

function Pagination(props) {

    let numberOfPages = [];
    for(let i=1; i <= Math.ceil(props.filteredDishes.length/ props.itemsPerPage); i++){
       numberOfPages.push(i);
    }
    
    function showNextDishesHandler(event){
        let CurrentPage = event.target.id
        props.setCurrentPage(CurrentPage)
    }

    let pages = numberOfPages.map((pageNumber) => {
        return(
            <li id={pageNumber} onClick={showNextDishesHandler}>{pageNumber}</li>
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
