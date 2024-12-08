


import { useContext } from "react"
import { FoodApp } from "../Context/Context"
import { useState } from "react";

export function Cart (){

    const {cart} = useContext(FoodApp)

    const totaldeliveryTime = cart.reduce((acc, curr) => acc + curr.delivery_time, 0);
    const billAmount = cart.reduce((acc,curr) => acc+ curr.price,0)

    const [discount,setDiscount] = useState(billAmount)


    function handleClick(){
        const total = (billAmount - 5)
        setDiscount(total)
    }



    return (
<div className="cartpage">
    <h1> Cart </h1>

    <h3> Total Delivery Time :  {totaldeliveryTime}</h3>

    <h3> Total Price : {billAmount}</h3>
    <h3>Total Price(with additinal discount)  : {discount}</h3>


    <button onClick={handleClick}> Add Discount </button>

<div className="homePage">

              
                
             
               
{
    cart.map((item) => (
        <div  key={item.id}className="item-card">
<img src={item.image} style={{ width: "150px" }} />
<p> Name: {item.name}</p>
<p>Description:  {item.description}</p>
<p>Price:  {item.price}</p>
<p>Delivery Time {item. delivery_time}</p>
</div>
    ))
}



</div>









</div>

        
           
        
    )
}