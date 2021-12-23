import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import '../index.css'

const NewGradient = () => {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
   


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
                                    console.log()
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
                    >
                        ADD GRADIENT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewGradient;