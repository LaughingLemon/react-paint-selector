import React from 'react';
import "./style.css";

export default class PaintSelector extends React.Component {
    
    constructor(props) {
        super(props);

        const selectOptions = 
              this.props.paintColours.sort((a, b) => a.name.localeCompare(b.name)).map((colour) => 
                    <option value={colour.hexCode}>{colour.name}</option>);
        this.onColourChange = this.onColourChange.bind(this);

        this.state = {
            options: selectOptions
        };
    }

    onColourChange = (evt) => {
        const colorHex = evt.target.value;
        this.props.onChangeColour(colorHex, evt);
    };

    render() {
        return (
            <select onChange={this.onColourChange}>
            {this.state.options}
            </select>
        )
    }
    
};
