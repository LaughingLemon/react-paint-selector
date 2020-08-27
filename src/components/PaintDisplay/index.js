import React from 'react';
import citadelColours from "../../json/Citadel_Colours.json";
import vallejoGame from "../../json/Vallejo_Game_Colours.json";
import vallejoModel from "../../json/Vallejo_Model_Colours.json";
import akInteractive from "../../json/AK_Interactive.json";
import myColours from "../../json/My_Colours.json";
import PaintSelection from "../PaintSelection";
import "./style.css";

export default (props) => (
    <div className={"PaintDisplay"}>
        <PaintSelection paintColours={myColours} value={props.colour} />
        <PaintSelection paintColours={citadelColours} value={props.colour} />
        <PaintSelection paintColours={vallejoGame} value={props.colour} />
        <PaintSelection paintColours={vallejoModel} value={props.colour} />
        <PaintSelection paintColours={akInteractive} value={props.colour} />
    </div>
);