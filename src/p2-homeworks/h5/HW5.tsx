import React from 'react'
import Header from './Header'
import Router from './Router'
import {HashRouter} from "react-router-dom";
import Junior from './pages/Junior';

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Router/>
                <Junior/>
            </HashRouter>
        </div>
    )
}

export default HW5
