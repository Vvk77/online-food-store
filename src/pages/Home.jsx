

import { Link } from 'react-router-dom';



export function Home (){
    return (
        <div class="homePage">
            <div class="food-card">
            <h1> 🍕 Welcome to <span>CraveCourier! </span> 🍔</h1>
           <h3> Your favorite meals, delivered right to your door! 🚀</h3>
           <p>📦 Order now and satisfy your cravings in just a few clicks! 😋</p>
            <nav>
            <Link to="/menu"><button> Menu </button></Link>
          </nav>
            </div>
        </div>
    )
}