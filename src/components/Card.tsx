import React from "react";
import TinderCard from "react-tinder-card";

const Card = ({
  option,
  handleSwipe
}: {
  option: string;
  handleSwipe: Function;
}) => {
  const selectRandom = (numbers: Number[]) =>
    numbers[Math.floor(Math.random() * numbers.length)];
  const onSwipe = (direction: string) => handleSwipe(option, direction);

  return (
    <TinderCard
      onSwipe={onSwipe}
      preventSwipe={["up", "down"]}
      className={`swipe rotate-${selectRandom(
        Array.from({ length: 11 }, (_, i) => i)
      )}`}
    >
      <span className="spacer" />
      <div className="card">{option}</div>
      <span className="spacer" />
    </TinderCard>
  );
};

export default Card;
