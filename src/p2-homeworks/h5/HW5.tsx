import React from 'react'
import Header from './Header'
import Router from './Router'
import {HashRouter} from "react-router-dom";
import PreJunior from "./pages/PreJunior";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Router/>
                <PreJunior/>
            </HashRouter>
        </div>
    )
}

export default HW5
