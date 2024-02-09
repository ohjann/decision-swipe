import React from 'react';
import "./App.scss";

import Card from './components/Card';

const App = () => {
  return (
    <div className="App bit-root">
      <div className="card-container">
        {[...Array(10)].map((a, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
