import React from "react";
import './Content.css';
import {Switch,Route} from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";
import UseState from "../../views/examples/UseState";
import UseEffect from "../../views/examples/UseEffect";
import UseRef from "../../views/examples/UseRef";
import UseMemo from "../../views/examples/UseMemo";
import UseCallback from "../../views/examples/UseCallback";
import UseContext from "../../views/examples/UseContext";
import UseReducer from "../../views/examples/UseReducer";
import UseMyHook from "../../views/examples/UseMyHook";

const Content = (props)=>(
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/param/:id">
                <Param/>
            </Route>
             <Route path="/usestate">
                <UseState/>
            </Route>
             <Route path="/useeffect">
                <UseEffect/>
            </Route>
             <Route path="/useref">
                <UseRef/>
            </Route>
             <Route path="/usememo">
                <UseMemo/>
            </Route>
             <Route path="/usecallback">
                <UseCallback/>
            </Route>
             <Route path="/usecontext">
                <UseContext/>
            </Route>
            <Route path="/usereducer">
                <UseReducer/>
            </Route>
            <Route path="/usemyhook">
                <UseMyHook/>
            </Route>
             <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
        Componente Content!!
    </main>
)

export default Content;