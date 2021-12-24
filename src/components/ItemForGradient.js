import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { Context } from '../index.js';
import { EDIT_ROUTE } from '../utils/consts.js';
import '../index.css';

const ItemForGradient = observer(({i}) => {
    const { activeGradients } = useContext(Context)
    const history = useHistory()

    const removeGradient = () => {
        let arr = []
        arr = activeGradients.gradientStore
        activeGradients.setArrOfGradients(arr.filter(item => item.id !== i.id))
    }
    const editGradient = (id) => {
        history.push(EDIT_ROUTE + '/' + id)
    }

    return (
        <div className="item">
            <div className="placeForItemGradient" id={ i.id }  style={{ background: `linear-gradient(45deg, ${ i.hex1 }, ${ i.hex2 })` }}></div>
            <div className="butomOfItem">
                <div>
                    <p><strong>HEX1: </strong>{ i.hex1 }</p>
                    <p><strong>HEX2: </strong>{ i.hex2 }</p>
                </div>
                <div>
                    <button className="btnEdit" onClick={() => { editGradient(i.id) }}>Edit</button>
                    <button className="btnCancel" onClick={() => { removeGradient() }}>X</button>
                </div>
            </div>
        </div>
    );
});

export default ItemForGradient;