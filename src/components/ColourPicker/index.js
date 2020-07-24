import React from 'react';
import "./style.css";
import { SketchPicker } from 'react-color';

export default class ColourPicker extends React.Component {

    constructor(props) {
        super(props);

        this.onColourChange = this.onColourChange.bind(this);

        this.state = {
            colour: props.color
        };
    }

    static getDerivedStateFromProps(props, state) {
        return ({
            ...state,
            colour: props.color
        });
    }

    onColourChange = (color, evt) => {
        this.setState({ colour: color.hex })

        this.props.onChangeColour(color.hex, evt);
    };

    render() {
        return (
            <div className={"dropdown"}>
                <button className={"dropbtn"}>Pick Color</button>
                <div className={"dropdown-content"}>
                    <SketchPicker color={this.state.colour} onChange={ this.onColourChange }/>
                </div>
            </div>
        )
    }
}
