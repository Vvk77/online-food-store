
import { fakeFetch } from "../Data/Data";
import { useState,useEffect,useReducer } from "react";
import { createContext } from "react";

export const FoodApp = createContext();




const cartReducer = (state,action) => {
switch(action.type) {
    case "Add to Cart" : 
    if(state.some((item) => item.id === action.payload.id)){
        return state;

    }
    return [...state, action.payload]


    default :
    return state;
}


}


export function DataProvider ({children}){
    const [menu,setMenu] = useState([])
   const [cart,dispatch] = useReducer(cartReducer,[])
   
const fetchData = async () => {
    try{

        const response = await fakeFetch("https://example.com/api/menu")
        if(response.status === 200){
            const data= (response.data.menu)
            setMenu(data)
        }

    }catch (e){
        console.log(e)
    }

}

useEffect(() =>{
    fetchData()
},[])


// function handleCart (id){
//     const selectedProduct = menu.find((menuItem) => menuItem.id === id)
//     if(selectedProduct && !cart.some((cartItem) => cartItem.id === id) )
//         setCart((prevCart) => [...prevCart, selectedProduct])

//  }

function handleCart (id){
    const selectedProduct = menu.find((menuItem) => menuItem.id === id)
    if(selectedProduct) {
        dispatch({type: "Add to Cart" , payload: selectedProduct})
    }

 }

//  function handleCart(id) {
//     const selectedProduct = menu.find((menuItem) => menuItem.id === id);
//     if (selectedProduct) {
//       dispatch({ type: "ADD_TO_CART", payload: selectedProduct });
//     }
//   }





console.log(cart)





    return (
        <FoodApp.Provider value={{menu,handleCart,cart}}> 


{children}
</FoodApp.Provider>
    )
}

