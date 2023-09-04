import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}
// console.log(getRandomAnimal());

function App() {
  // const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  // const handleClick = () => {
  //   console.log("Button was clicked!");
  // };
  // const handleClicks = function() {
  //   console.log("Button was clicked!");
  // };

  return (
    <div className="app">
      <button
        onClick={handleClick}
        // onClick={handleClicks}
        // onClick={function () { console.log("Button was clicked!");}}
        // onClick={() => console.log("Button was clicked!")}
      >
        Add Animal
      </button>
      {/* <div>Number of animals: {count}</div> */}
      <div className="animal-list">{renderedAnimals} </div>
    </div>
  );
}

export default App;
