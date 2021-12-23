import React, { useState, useContext} from "react";
import { observer } from "mobx-react-lite";
import { v4 as uuid } from 'uuid';
import { useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { Context } from "../index.js";
import { HOME } from "../utils/consts.js";
import '../index.css'

const NewGradient = observer(() => {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const { activeGradients } = useContext(Context);
    const history = useHistory();
    let s1 = null;
    let s2 = null;
    function click(elem1, elem2) {
        if(s1 && s2) {
            let newGradient = {id: uuid(), hex1: elem1, hex2: elem2}
            activeGradients.setGradientToGradientStore(newGradient)
            console.log(activeGradients.gradientStore)
            history.push(HOME);
        }
    }

    const arrOfValidValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    function validRessult() {
        document.getElementById('btnAddGradient').style.opacity = 1
        document.getElementById('btnAddGradient').style.cursor = 'pointer'
    }
    function notValidRessult() {
        document.getElementById('btnAddGradient').style.opacity = 0.6
        document.getElementById('btnAddGradient').style.cursor = 'not-allowed'
    }

    function checkInputs(str, str2) {
        if(str && str2){
            if(str[0] === '#' && str2[0] === '#') {
                for(let i = 1; i < str.length; i++) {
                    for(let j = 1; j < str2.length; j++) {
                        if(arrOfValidValues.includes(str[i]) && arrOfValidValues.includes(str2[j])) {
                            if(str.length === 4 || str.length === 7) {
                                if(str2.length === 4 || str2.length === 7) {
                                    validRessult()
                                    s1 = str;
                                    s2 = str2;
                                    document.getElementById('bckgrndGrdnt').style.background = `linear-gradient(45deg, ${str}, ${str2})`;
                                } else if(str2.length < 4 || str2.length > 7 || str2.length === 5 || str2.length === 6) {
                                    notValidRessult()
                                }
                            } else if(str.length < 4 || str.length > 7 || str.length === 5 || str.length === 6) {
                                notValidRessult()
                            }
                        } else {
                            notValidRessult()
                        }
                    }
                }
            } 
        }
    }
    
    checkInputs(input1.toUpperCase(), input2.toUpperCase())
    

    return (
        <div className="newGradient">
           <div className="jumbotron">
                <h1 className="titleOfElement">Create a new gradient</h1>
                <div className="backgroundGradient" id="bckgrndGrdnt"></div>
                <p className="lead">Enter the <strong>hex</strong>-value of the colors.</p>
                <div className="inputForm">
                        <Form.Control 
                            className="inputPlace" 
                            type="text" 
                            placeholder="#FFFFFF"
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)} 
                        />
                        <Form.Control 
                            className="inputPlace" 
                            type="text" 
                            placeholder="#00FF00"
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                        />
                </div>
                <div className="buttonPlace">
                    <button 
                        className="btnPl"
                        style={{width: 200}}
                        id="btnAddGradient"
                        onClick={() => {click(input1, input2)}}
                    >
                        ADD GRADIENT
                    </button>
                </div>
            </div>
        </div>
    )
});

export default NewGradient;