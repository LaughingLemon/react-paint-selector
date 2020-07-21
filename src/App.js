import React from 'react';
import './App.css';
import PaintDisplay from './components/PaintDisplay';

class App extends React.Component {

    constructor(props) {
      super(props);

      this.onSelectPaintColour = this.onSelectPaintColour.bind(this);

      this.state = {
        paintColour: 0x000000
      }
    }

    onSelectPaintColour(evt) {
      evt.preventDefault();

      const colour = document.getElementById("favcolor").value;
      const colourValue = parseInt(colour.replace("#", "0x"), 16);

      this.setState(
        {
          paintColour: colourValue
        }
      );
    }

    render() {
      return (
        <div className="App">
          <h1>Paint Colour Selector</h1>
          <label htmlFor="favcolor">Enter a Hex RGB for the colour</label>
          <input type="text" id="favcolor" name="favcolor" />
          <button onClick={this.onSelectPaintColour}>Select Paint Colour</button>
          <PaintDisplay colour={this.state.paintColour} />
        </div>
      );      
    }

}

export default App;