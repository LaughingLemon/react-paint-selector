import React from 'react';
import PaintColour from "../../utils/PaintColour";
import findNearestPaintColour from "../../utils/SelectColour";
import "./style.css"

export default (props) => {
    const paintColours = props.paintColours.map((colour) => new PaintColour(colour.name, parseInt(colour.hexCode.replace("#", "0x"), 16)));

    const nearestColour = findNearestPaintColour(props.value, paintColours);

    const innerColour = "#" + nearestColour.hexCode.toString(16).padStart(6, '0'); 
    const outerColour = "#" + props.value.toString(16).padStart(6, '0'); 

    return (
        <div className={"w3-card-4"}>
            <div className={"colour-boxes box"}>
                <div className={"outer-box"} style={{ backgroundColor: outerColour }}>
                    <div className={"inner-box"} style={{ backgroundColor: innerColour }}>&nbsp;</div>
                </div>
            </div>
            <div className={"box"}>
                <div>{props.name}</div>
                <div>{nearestColour.name}</div>
                <div>{innerColour}</div>
                <div>{nearestColour.distance.toFixed(0)}</div>
            </div>
        </div>
    );
};