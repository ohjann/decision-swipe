import React, { useState } from "react";
import "./App.scss";

import OptionsForm from "./components/OptionsForm";
import CardContainer from "./components/CardContainer";

const shuffleArray = (arr: string[]) =>
  arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const App = () => {
  const [options, setOptions] = useState<string[]>([]);
  const onSubmit = (opts: string[]) => {
    setOptions(shuffleArray(opts));
  };
  return (
    <div className="App bit-root">
      {options.length ? (
        <CardContainer options={options} />
      ) : (
        <OptionsForm onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default App;
