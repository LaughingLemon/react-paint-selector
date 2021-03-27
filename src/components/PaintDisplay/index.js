import React from 'react';
import citadelColours from "../../json/Citadel_Colours.json";
import vallejoGame from "../../json/Vallejo_Game_Colours.json";
import vallejoModel from "../../json/Vallejo_Model_Colours.json";
import akInteractive from "../../json/AK_Interactive.json";
import scale75Instant from "../../json/Scale75_Instant_Colours.json";
import warColoursTone from "../../json/Warcolours_Tones.json";
import myColours from "../../json/My_Colours.json";
import citadelContrast from "../../json/Citadel_Contrast.json";
import PaintSelection from "../PaintSelection";
import "./style.css";

export default (props) => (
    <div className={"PaintDisplay"}>
        <PaintSelection paintColours={myColours} value={props.colour} />
        <PaintSelection paintColours={citadelColours} value={props.colour} />
        <PaintSelection paintColours={vallejoGame} value={props.colour} />
        <PaintSelection paintColours={vallejoModel} value={props.colour} />
        <PaintSelection paintColours={akInteractive} value={props.colour} />
        <PaintSelection paintColours={scale75Instant} value={props.colour} />
        <PaintSelection paintColours={warColoursTone} value={props.colour} />
        <PaintSelection paintColours={citadelContrast} value={props.colour} />
    </div>
);