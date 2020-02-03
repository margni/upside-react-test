import React from 'react';

import {Currency} from './Currency';

import './pizza.css';

export const Pizza = ({pizza}) =>
    <div className="Pizza">
        <div className="Pizza__Size">
            {pizza.size.name}
        </div>
        <div className="Pizza__Base">
            {pizza.base.name}
        </div>
        <ul className="Pizza__Toppings">
            { pizza.toppings.map((topping, i) => <li key={i} className="Pizza__Topping">{topping.name}</li>) }
        </ul>
        <div className="Pizza__Price">
            <Currency number={pizza.total}></Currency>
        </div>
    </div>;
