import React, { Fragment } from "react";
import Card from "./Card";
import Results from "./Results";
import usePlayerState, { Direction } from "../hooks/usePlayerState";
// import { Direction } from "../hooks/usePlayerState";

const CardContainer = ({
  options,
  players
}: {
  options: string[];
  players: number;
}) => {
  const {
    setPlayerSwipe,
    getTotalPlayerSwipes,
    getIntersection
  } = usePlayerState(players);

  const handleSwipe = (playerNo: number) => (
    option: string,
    direction: string
  ) =>
    setPlayerSwipe(
      playerNo,
      option,
      Direction[direction as keyof typeof Direction]
    );

  const complete = getTotalPlayerSwipes() === (options.length * players);

  if (complete) {
    return <Results rightSwipes={getIntersection()} />;
  } else {
    return (
      <div className="card-container">
        {Array.from({ length: players }, (_, i) => i).reverse().map(playerNo => (
          <Fragment key={`player-stack-${playerNo}`}>
            {options.map((option, idx) => (
              <Card
                key={idx}
                option={option}
                handleSwipe={handleSwipe(playerNo)}
              />
            ))}
            <Card
              option={`Player ${playerNo + 1}`}
              handleSwipe={handleSwipe(playerNo)}
            />
          </Fragment>
        ))}
        <sub className="tip">Left: No  Right: Yes</sub>
      </div>
    );
  }
};

export default CardContainer;
