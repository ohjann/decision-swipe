import React from "react";
import TinderCard from "react-tinder-card";

const Card = () => {
  const onSwipe = (direction: string) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + " left the screen");
  };

  const selectRandom = (numbers: Number[]) =>
    numbers[Math.floor(Math.random() * numbers.length)];

  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen("fooBar")}
      preventSwipe={["up", "down"]}
      className={`swipe rotate-${selectRandom(
        Array.from({ length: 11 }, (_, i) => i)
      )}`}
    >
      <span className="spacer" />
      <div className="card">Hello, World!</div>
      <span className="spacer" />
    </TinderCard>
  );
};

export default Card;
