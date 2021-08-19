import React , {useState, useEffect} from 'react'
import Loader from './Loader';


export const AllMenuContext = React.createContext()

export const AllMenu = (props)=>{

    //state
    let [menu, setMenu] = useState([]);
    let [loading, setLoading] = useState(false);

    async function getAllTheMenus(){
        setLoading(true)
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL);
        let data = await response.json()
        setMenu(data.meals);
        setLoading(false);
    }
    useEffect(()=>{
        getAllTheMenus();
    },[]);
    return(
        <AllMenuContext.Provider value={menu}>
             {!loading ?   props.children : <Loader/>}
            
        </AllMenuContext.Provider>
    )
}

