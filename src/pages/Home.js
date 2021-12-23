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
            HOME Page
            <div className="gradientAtHomePage">
                {activeGradients.gradientStore.map(item => <ItemForGradient key={item.id} i={item}/>)}
            </div>
            <div>
                <button onClick={() => newGr() }>Create New Gradient</button>
            </div>
        </div>
    )
});

export default Home;