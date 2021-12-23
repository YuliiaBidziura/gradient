import React, { useState, useContext} from "react";
import { observer } from "mobx-react-lite";
import { useParams, useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { Context } from "../index.js";
import { HOME } from "../utils/consts.js";
import '../index.css'

const EditGradient = observer(() => {
    const history = useHistory()
    const { activeGradients } = useContext(Context);
    const {id} = useParams()
    let found = activeGradients.gradientStore.find(element => element.id === id);
    console.log(activeGradients.gradientStore)
    let s1 = found.hex1;
    let s2 = found.hex2;
    const [input1, setInput1] = useState(s1)
    const [input2, setInput2] = useState(s2)
    
   
    const arrOfValidValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    
    function clickToEdit(a, b) {
        let replace = activeGradients.gradientStore.find(element => (element.id === id) ? (element.hex1 = a, element.hex2 =b) : null)
        history.push(HOME)
    }

    function validRessult() {
        setTimeout(() => {
            document.getElementById('btnEditGradient').style.opacity = 1
            document.getElementById('btnEditGradient').style.cursor = 'pointer'
        }, 0)
        
    }
    function notValidRessult() {
        setTimeout(() => {
            document.getElementById('btnEditGradient').style.opacity = 0.6
            document.getElementById('btnEditGradient').style.cursor = 'not-allowed'
        }, 0)
    }
    function addBackground(a, b) {
        setTimeout(() =>  document.getElementById('backgroundEditGradient').style.background = `linear-gradient(45deg, ${a}, ${b})`, 0)
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
                                    addBackground(s1, s2)
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
        <div className="EditGradient">
           <div className="jumbotron">
                <h1 className="titleOfElement">Edit gradient</h1>
                <div className="backgroundEditGradient" id="backgroundEditGradient"></div>
                <p className="lead">Enter the <strong>hex</strong>-value of the colors.</p>
                <div className="inputForm">
                        <Form.Control 
                            className="inputPlace" 
                            type="text" 
                            placeholder={input1}
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)} 
                        />
                        <Form.Control 
                            className="inputPlace" 
                            type="text" 
                            placeholder={input2}
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                        />
                </div>
                <div className="buttonPlace">
                    <button 
                        className="btnPl"
                        style={{width: 200}}
                        id="btnEditGradient"
                        onClick={() => clickToEdit(s1, s2)}
                    >
                        EDIT GRADIENT
                    </button>
                </div>
            </div>
        </div>
    )
});

export default EditGradient;