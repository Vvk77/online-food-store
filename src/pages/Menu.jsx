
import { useContext ,useReducer,useState} from "react";
import { FoodApp } from "../Context/Context";

import { Link } from "react-router-dom";
import '../Menu.css';




const intialState = {
    searchTerm: "",
    isSpicy: false,
    isVegetarian: false,
    sortPrice: "all"
}


function reducer (state,action ) {
    switch(action.type){
    case "set_search_item":
        return {...state, searchTerm: action.payload}
case "toggleChange": 
return {...state , isSpicy: !state.isSpicy}
case "TOGGLE_VEGETARIAN":
      return { ...state, isVegetarian: !state.isVegetarian };
      case "set_Sort":
      return {...state,  sortPrice: action.payload}
      default:
      return state;

    } 

}

export function Menu() {





    const [state,dispatch] = useReducer(reducer,intialState)

    // const [searchTerm,setSearchTerm] = useState("")
    // const [isSpicy,setIsSpicy] = useState(false)
    // const [isVegetarian,setIsVegetarian] = useState(false)
    // const [sortPrice,setSortPrice] = useState("all")


    const { menu,handleCart ,cart} = useContext(FoodApp);


  

 

    function handleChange(e){
        dispatch({type: "set_search_item", payload: e.target.value})
     


    }

    function handleSpicyChange (){
        dispatch({type: "toggleChange"})
       
    }

    function handleVegetarianChange (){
        dispatch({type: "TOGGLE_VEGETARIAN"})
       
    }



    function handleSortChange(e){
        dispatch({type: "set_Sort" , payload: e.target.value})
       
    }

//    const filterMenu = menu.filter(item => {
//     const matchSearch = menu.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     const matchSpicy = isSpicy ? item.isSpicy === true : true;
//     const matchesVegetarian = isVegetarian ? item.is_vegetarian === true : true
//     return matchSearch && matchSpicy && matchesVegetarian
//    })
    

    const filteredMenu = menu.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(state.searchTerm.toLowerCase());
        const matchesSpicy = state.isSpicy ? item.is_spicy === true : true;
        const matchesVegetarian = state.isVegetarian ? item.is_vegetarian === true : true;
        return matchesSearch && matchesSpicy && matchesVegetarian;
    });


    let sortedMenu = [...filteredMenu]
    if(state.sortPrice === "low"){
        sortedMenu.sort((a,b) => a.price - b.price)
      }  else if(state.sortPrice === "high"){
            sortedMenu.sort((a,b) => b.price - a.price)

        }
    

   


    // const filteredMenu = menu.filter(item =>
    //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );


    return (
        <div>
           <nav className="menu-nav">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/cart">Cart ({cart.length})</Link>
                </nav> 
            <div className="pizza-quote">
                <h2>"Slice, slice, baby! Life is better with pizza."</h2>
            </div>

            <nav className="Filter">
                <h1> Filters : </h1>

            </nav>
           <div  className= "search-bar">
            <input 
            type="text"
            placeholder="Enter name"
            value={state.searchTerm}
            onChange={handleChange}
            


           />

<div className="checkbox">
                    <input 
                        type="checkbox"
                        id="spicy"
                        checked={state.isSpicy}
                        onChange={handleSpicyChange}
                    />
                    <label htmlFor="spicy">Spicy</label>
                </div>

                {/* Vegetarian checkbox */}
                <div className="checkbox">
                    <input 
                        type="checkbox"
                        id="vegetarian"
                        checked={state.isVegetarian}
                         onChange={handleVegetarianChange}
                     />
                    <label htmlFor="vegetarian">Vegetarian</label>

                    
                </div>

        
          </div>

<div>
<div className="radioBtn">



<input 
            type="radio"
            name="sort"
            value="all"
            checked={state.sortPrice === "all"}
            onChange={handleSortChange}

            />
             <label htmlFor="all">All</label>


            <input 
            type="radio"
            name="sort"
            value="low"
            checked={state.sortPrice === "low"}
            onChange={handleSortChange}

            />
             <label htmlFor="low">Sort(price)Low to High</label>
           
            <input
            type="radio"
            name="sort"
            value="high"
            checked={state.sortPrice === "high"}
            onChange={handleSortChange}
          />
          <label htmlFor="high"> Sort(price)High to Low</label>

          </div>
</div>



        
          
           
            <div className="homePage">
                
             
               
                {
                    sortedMenu.map((item) => {
const IsinCart = cart.some((cartItem) => cartItem.id === item.id) 

                        return(
                            <div  key={item.id}className="item-card">
                            <img src={item.image} style={{ width: "150px" }} />
                            <p> Name: {item.name}</p>
                            <p>Description:  {item.description}</p>
                            <p>Price:  {item.price}</p>
                            <p>Delivery Time {item. delivery_time}</p>
  {!IsinCart ? (
   <button className="cartbtn" onClick={() => handleCart(item.id)}> Add To Cart </button>
  ):(
    <Link to="/cart">
     <button className="cartbtn" > Go to cart </button>
     </Link>
    )}
   
    
  


                          
                                                       </div>
                                               )
                                           }


                        )
                    }
                    
                         {/* <div  key={item.id}className="item-card">
 <img src={item.image} style={{ width: "150px" }} />
 <p> Name: {item.name}</p>
 <p>Description:  {item.description}</p>
 <p>Price:  {item.price}</p>
 <p>Delivery Time {item. delivery_time}</p>
 <button className="cartbtn" onClick={() => handleCart(item.id)}> Add To Cart </button>
                            </div>
                    )
                } */}

            </div>
        </div>
    )
}
