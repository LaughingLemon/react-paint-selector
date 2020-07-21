import React from 'react';
import citadelColours from "../../json/Citadel_Colours.json";
import vallejoGame from "../../json/Vallejo_Game_Colours.json";
import vallejoModel from "../../json/Vallejo_Model_Colours.json";
import PaintSelection from "../PaintSelection";
import "./style.css"

export default (props) => (
    <div className={"PaintDisplay"}>
        <PaintSelection name={"Citadel"} paintColours={citadelColours} value={props.colour} />
        <PaintSelection name={"Vallejo Game"} paintColours={vallejoGame} value={props.colour} />
        <PaintSelection name={"Vallejo Model"} paintColours={vallejoModel} value={props.colour} />
    </div>
);