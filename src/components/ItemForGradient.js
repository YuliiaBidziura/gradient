import React, {useContext} from "react";
import { observer } from "mobx-react-lite";
import '../index.css'
import { Context } from "../index.js";

const ItemForGradient = observer(({i}) => {
    const { activeGradients } = useContext(Context);

    const removeGradient = () => {
        let arr = [];
        arr = activeGradients.gradientStore;
        activeGradients.setArrOfGradients(arr.filter(item => item.id !== i.id))
    }

    if(i) {
        return (
            <div className="item">
                <div className="placeForItemGradient" id={i.id}  style={{background: `linear-gradient(45deg, ${i.hex1}, ${i.hex2})`}}></div>
                <div className="butomOfItem">
                    <div>
                        <p><strong>HEX1: </strong>{i.hex1}</p>
                        <p><strong>HEX2: </strong>{i.hex2}</p>
                    </div>
                    <div>
                        <button className="btnEdit">Edit</button>
                        <button className="btnCancel" onClick={() => {removeGradient()}}>X</button>
                    </div>
                </div>
            </div>
        )
    }
});

export default ItemForGradient;