import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (<div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>)
};



function Header() {
  //Inline CSS
  // const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )

}


function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;


  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* Conditional rendering : Here I use SHORT CIRCUITING */}
      {/* {numPizzas > 0 && <ul className="pizzas">
        {
          pizzas.map(pizza => (
            // <Pizza name={pizzaData.name} namePhoto={pizzaData.namePhoto} />
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))
        }
      </ul>
      } */}

      {/* Conditional rendering: Use of ternary operator */}
      {numPizzas > 0 ? (
        <>
          <div>
            Authentic Italian coisine. 6 creatvie dishes choose from. All from out stone oven and all are organic, all deleicious.
          </div>
          <ul className="pizzas">
            {
              // Here is list rendering 
              pizzas.map(pizza => (
                // <Pizza name={pizzaData.name} namePhoto={pizzaData.namePhoto} />
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))
            }
          </ul>
        </>
      )
        : (
          <p>We're still working on our manu. Please come back later </p>
        )}


      {/* <Pizza name='Pizza Spinaci' namePhoto='pizzas/spinaci.jpg' ingredients='Tommato, mozarilla, spinaci, adn ricotta cheese' price={10} />
      <Pizza name='Pizza Funghi' namePhoto='pizzas/funghi.jpg' ingredients='Tomatto, mushrooms.' price={20} /> */}
    </main>
  )
}
function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt="Pizza" />
      <div className="">
        <h1>{props.pizzaObj.name}</h1>
        <p>{props.pizzaObj.ingredients}</p>

        <span>{props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}</span>
      </div>
      {/* <img src={props.namePhoto} alt="Pizza" />
      <div className="">
        <h1>{props.name}</h1>
        <p>{props.ingredients}</p>
        <span>price: {props.price + 3}</span>
      </div> */}
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are open now.");
  // } else {
  //   alert("We are closed now");
  // }
  return (
    <footer className="footer">


      {/*       {numPizzas > 0 ? (<ul className="pizzas">
        {
          pizzas.map(pizza => (
            // <Pizza name={pizzaData.name} namePhoto={pizzaData.namePhoto} />
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))
        }
      </ul>) : (
        <p>We're still working on our manu. Please come back later </p>
      )} */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We're open until {closeHour}:00. Come visit us or order online </p>
      )
        // <div className="order">
        //   <p>We're open until {closeHour}:00. Come visit us or order online </p>
        //   <button className="btn"> Order </button>
        // </div>
      }

      {/* {new Date().toLocaleTimeString()} We are currently open now. */}
    </footer>
  )
}

// Destructuring props (use props name instead of props) 
// function Order(props) {
function Order({ closeHour }) {
  return (
    <div className="order">
      {/* <p>We're open until {props.closeHour}:00. Come visit us or order online </p> */}
      <p>We're open until {closeHour}:00. Come visit us or order online </p>
      <button className="btn"> Order </button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);





/////////////// TIME FUNCTION ///////////////////
// export default function App() {
//   // const time = new Date().toLocaleTimeString();
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   useEffect(function () {
//     setInterval(function () {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//   }, [])
//   return (
//     <>

//       <h1>{time}</h1>
//     </>
//   )

// }





// //////////////////// PURE REACT //////////////////////////
// export default function App() {

//   const [advice, setAdvice] = useState('');
//   const [count, setCount] = useState(0);

//   async function getAdvice() {

//     const res = await fetch("https://api.adviceslip.com/advice");
//     const data = await res.json();
//     setAdvice(data.slip.advice);
//     setCount(count => count + 1);
//   }
//   useEffect(
//     function () {
//       getAdvice();
//     }, []
//   );
//   return (
//     <>
//       <h1>{advice}</h1>
//       <button onClick={getAdvice}>Get Advice</button>
//       <Message count={count} />
//     </>
//   );
// }


// function Message(props) {
//   return (
//     <p>You have read <strong>{props.count}</strong> advices...</p>
//   )
// }













































