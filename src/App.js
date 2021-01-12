import React from 'react';
import './App.css';
import PaintDisplay from './components/PaintDisplay';
import ColourPicker from './components/ColourPicker';
import PaintSelector from './components/PaintSelector';
import citadelContrast from './json/Citadel_Contrast.json';

class App extends React.Component {

    constructor(props) {
      super(props);

      this.onSelectPaintColour = this.onSelectPaintColour.bind(this);
      this.onColourSelected = this.onColourSelected.bind(this);
      this.onColourInputChanged = this.onColourInputChanged.bind(this);

      this.state = {
        paintColour: 0x000000,
        colourSelected: "#000000"
      }
    }

    onSelectPaintColour(evt) {
      evt.preventDefault();

      const colour = this.state.colourSelected;
      const colourValue = parseInt(colour.replace("#", "0x"), 16);

      this.setState(oldState => (
        {
          ...oldState,
          paintColour: colourValue
        }
      ));
    }

    onColourSelected(colour, evt) {
      evt.preventDefault();

      this.setState(oldState => (
        {
          ...oldState,
          colourSelected: colour
        }
      ));
    }

    onColourInputChanged(evt) {
      const colourText = evt.target.value;
      evt.preventDefault();

      this.setState(oldState => (
        {
          ...oldState,
          colourSelected: colourText
        }
      ));
    }

    render() {
      return (
        <div className="App">
          <h1>Paint Colour Selector</h1>
          <label htmlFor="favcolor">Enter a Hex RGB for the colour</label>
          <input type="text" id="favcolor" name="favcolor" value={this.state.colourSelected} onChange={this.onColourInputChanged} />
          <ColourPicker color={this.state.colourSelected} onChangeColour={this.onColourSelected} />
          <button onClick={this.onSelectPaintColour}>Select Paint Colour</button>
          <PaintSelector paintColours={citadelContrast} onChangeColour={this.onColourSelected}/>
          <PaintDisplay colour={this.state.paintColour} />
        </div>
      );      
    }

}

export default App;