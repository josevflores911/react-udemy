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
                    <Link to="/about">Sobre</Link>
                    {/* {<a href="/">Sobre</a>} */}
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu;