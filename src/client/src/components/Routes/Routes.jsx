import React from 'react'
import Dash from "../Home/Dash"
import {Route, BrowserRouter} from "react-router-dom"
import Navbar from "../Common/Navbar"

export default function () {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route to="/" component={Dash}/>
        </BrowserRouter>
    )
}
