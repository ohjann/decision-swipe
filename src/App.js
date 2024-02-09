import TinderCard from "react-tinder-card";
import "./App.scss";

function App() {
  const onSwipe = direction => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = myIdentifier => {
    console.log(myIdentifier + " left the screen");
  };

  const selectRandom = numbers =>
    numbers[Math.floor(Math.random() * numbers.length)];

  return (
    <div className="App bit-root">
      <div className="card-container">
        {[...Array(10)].map((a, idx) => (
          <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
            key={idx}
            className={`swipe rotate-${selectRandom(
              Array.from({ length: 11 }, (_, i) => i)
            )}`}
          >
            <span class="spacer"></span>
            <div className="card">Hello, World!</div>
            <span class="spacer"></span>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default App;
