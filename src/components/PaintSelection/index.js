import React from 'react';
import PaintColour from "../../utils/PaintColour";
import findNearestPaintColour from "../../utils/SelectColour";

export default (props) => {
    const paintColours = props.paintColours.map((colour) => new PaintColour(colour.name, parseInt(colour.hexCode.replace("#", "0x"), 16)));

    console.log("props.value", props.value);

    const nearestColour = findNearestPaintColour(props.value, paintColours);

    const backColour = "#" + nearestColour.hexCode.toString(16).padStart(6, '0'); 

    const stylesObj = {
        backgroundColor: backColour
    };

    console.log("stylesObj", stylesObj);

    return (
        <div>
            <div>{props.name}</div>
            <div className={"box"} style={stylesObj}>&nbsp;</div>
            <div>{nearestColour.name}</div>
            <div>{nearestColour.hexCode.toString(16)}</div>
        </div>
    );
};