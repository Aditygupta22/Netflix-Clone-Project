import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
const App=()=>{
    return <Router>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
}
export default App;