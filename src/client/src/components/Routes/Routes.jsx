import React from 'react'
import Dash from "../Home/Dash"
import {Route, BrowserRouter} from "react-router-dom"
import Navbar from "../Common/Navbar"
import TeacherRecord from "../Record/TeachersRecord"

export default function () {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route exact path="/" component={Dash}/>
            <Route path="/record/teachers" component={TeacherRecord}/>
        </BrowserRouter>
    )
}
