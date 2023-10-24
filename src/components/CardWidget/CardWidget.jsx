import { BiSolidCartAdd } from "react-icons/bi";
import "./cardwidget.css"

import React from 'react';

const CardWidget = () => {
    return (
        <div className="carrito">
            < BiSolidCartAdd/>
            <p>0</p>
        </div>
    );
};

export default CardWidget;