import React from "react";
import './Menu.css';
import {Link} from 'react-router-dom';


const Menu = (props)=>(
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                    {/* {<a href="/">Inicio</a>} */}
                </li>
                <li>
                    <Link to="/param/1">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/second">Param #02</Link>
                </li>
                <li>
                    <Link to="/noexiste">no existe</Link>
                </li>
                <li>
                    <Link to="/usestate">UseState</Link>
                </li>
                <li>
                    <Link to="/useeffect">UseEffect</Link>
                </li>
                <li>
                    <Link to="/useref">UseRef</Link>
                </li>
                <li>
                    <Link to="/usememo">UseMemo</Link>
                </li>
                <li>
                    <Link to="/usecallback">UseCallback</Link>
                </li>
                <li>
                    <Link to="/usecontext">UseContext</Link>
                </li>
                <li>
                    <Link to="/usereducer">UseReducer</Link>
                </li>
                <li>
                    <Link to="/usemyhook">UseMyHook</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                    {/* {<a href="/">Sobre</a>} */}
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu;