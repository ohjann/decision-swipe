import { useState } from "react";

interface IPlayerState {
  leftSwipes: string[];
  rightSwipes: string[];
}

export enum Direction {
  left = "left",
  right = "right"
}

const usePlayerState = (numberOfPlayers: number) => {
  const [playerState, setPlayerState] = useState<IPlayerState[]>(
    new Array(numberOfPlayers)
      .fill(0)
      .map((e, id) => ({ leftSwipes: [], rightSwipes: [] }))
  );

  const getTotalPlayerSwipes = (): number =>
    playerState.reduce(
      (total, player) =>
        total + player.leftSwipes.length + player.rightSwipes.length,
      0
    );

  const setPlayerSwipe = (
    playerNo: number,
    swipe: string,
    direction: Direction
  ) => {
    if (swipe.includes("Player")) {
      return;
    }
    const pState = [...playerState];
    if (direction === Direction.left) {
      pState[playerNo] = {
        ...pState[playerNo],
        leftSwipes: [...pState[playerNo].leftSwipes, swipe]
      };
    } else if (direction === Direction.right) {
      pState[playerNo] = {
        ...pState[playerNo],
        rightSwipes: [...pState[playerNo].rightSwipes, swipe]
      };
    }
    setPlayerState(pState);
  };

  const getIntersection = (): string[] => {
    const leftSwipes = playerState.map(p => p.leftSwipes);
    return leftSwipes.reduce((acc, arr) =>
      acc.filter(value => arr.includes(value))
    );
  };

  return { setPlayerSwipe, getTotalPlayerSwipes, getIntersection };
};

export default usePlayerState;
