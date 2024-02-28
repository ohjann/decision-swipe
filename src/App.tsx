import React, { useState, useEffect } from "react";
import { setConfiguration } from "react-grid-system";

import "./App.scss";

import Instructions from "./components/Instructions";
import OptionsForm from "./components/OptionsForm";
import CardContainer from "./components/CardContainer";
import Players from "./components/Players";

const shuffleArray = (arr: string[]) =>
  arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const App = () => {
  setConfiguration({ maxScreenClass: "lg" });
  const [options, setOptions] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [players, setPlayers] = useState<number>(1);
  const onSubmit = (opts: string[]) => {
    setOptions(shuffleArray(opts));
  };
  useEffect(
    () => {
      if (options.length) {
        setPage(3);
      }
    },
    [options]
  );
  return (
    <div className="App">
      {page === 1 ? (
        <Instructions gotIt={() => setPage(2)} />
      ) : page === 2 ? (
        <OptionsForm onSubmit={onSubmit} />
      ) : page === 3 ? (
        <Players
          letsGo={() => setPage(4)}
          players={players}
          setPlayers={setPlayers}
        />
      ) : (
        <CardContainer options={options} players={players}/>
      )}
    </div>
  );
};

export default App;
