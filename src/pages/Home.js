import React, {useContext} from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { Context } from "../index.js";
import { NEW_ROUTE } from "../utils/consts.js";
import ItemForGradient from '../components/ItemForGradient.js'

const Home = observer(() => {
    const { activeGradients } = useContext(Context);
    const history = useHistory();
    let gradients = activeGradients.gradientStore
    console.log(gradients)

    function newGr() {
        history.push(NEW_ROUTE)
    }
    
    return (
        <div>
            <h1 className="hHome">Your palette of gradients</h1>
            <div className="gradientAtHomePage">
                {activeGradients.gradientStore.map(item => <ItemForGradient key={item.id} i={item}/>)}
            </div>
            <div className="btnHome">
                <button onClick={() => newGr() } className="btnPl">Create New Gradient</button>
            </div>
        </div>
    )
});

export default Home;