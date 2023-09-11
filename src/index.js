import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photo: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photo: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photo: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photo: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photo: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photo: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  





function App() {
  return (
    <div className="container">
      <Header/>
      <Menu />
      <Footer/>

    </div>
  );
}

//In React we create components using function Keyword.
//Rules while creating a component
//1.First letter of the comp name should be uppercase
//2.It should return a markup/even it can return null .


function Header (){
    
    return(  
    
    <header className="header">

   <h1>Fast React Pizza Co.</h1>

    </header>
    );
}

function Menu () {
    

   const pizzas = pizzaData;
  const numpizza = pizzas.length;

    return(<main className="menu">

         <h2>Our Menu</h2>
         
          
        {numpizza > 0 ? (

 <>


<p>
Authentic Italian cuisine. 6 creative dishes to choose from. All from our stove oven, all organic,all delicious.
</p>

        <ul className="pizzas">
          {pizzas.map((pizza) => (<Pizza pizzaObj = {pizza} key={pizza.name}/>
           ))}
        </ul>
        </>
        ): <p>We're Still Working on our menu . please comeback later.</p>}

           

        {/*<Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photo='pizzas/spinaci.jpg'
         price={10}/>
          <Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion' photo='pizzas/funghi.jpg'
price={12}/> */}


      
    </main>);

}

function Pizza({pizzaObj}) {    // Destructuring of props in this line.  
  // if(pizzaObj.soldOut) return null;
    return(
   <li className={`pizza ${pizzaObj.soldOut ? "sold-out": " "}`}>
      
      <img src={pizzaObj.photo} alt="Pizza Spinaci"/>
      <div>

      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients} </p>
      <span>{pizzaObj.soldOut ? "SOLD OUT": pizzaObj.price}</span>
      
      </div>
   
    </li>);
}


function Footer(){
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;

const isopen = hour>=openHour && hour<=closeHour;
console.log(isopen);

//if() alert("We're currently open");
//else alert("Sorry we're closed");


return (<footer className="footer">

  {isopen ? <Order closeHour={closeHour}/>
  
 : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>}

 
  </footer>
);
}


function Order(props) {
  return  (<div className="order">

  <p>
    We're open until {props.closeHour}:00.Come visit us or order online. 
  </p>
  <button className="btn">Order now</button>
  </div>)
}



// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
