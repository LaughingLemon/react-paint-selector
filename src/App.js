import React from 'react';
import './App.css';

export default () => (
  <div className="App">
    <h1>Paint Colour Selector</h1>
    <label htmlFor="favcolor">Enter a Hex RGB for the colour</label>
    <input type="text" id="favcolor" name="favcolor" />
    <button>Select Colour</button>
  </div>
);
