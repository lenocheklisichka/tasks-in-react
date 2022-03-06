import React from 'react'
import Header from './Header'
import Router from './Router'
import {HashRouter} from "react-router-dom";
import Junior from './pages/Junior';
import HW11 from '../h11/HW11';

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Router/>
            </HashRouter>
        </div>
    )
}

export default HW5
