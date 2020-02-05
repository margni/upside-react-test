import React from 'react';

import {Currency} from './Currency';

import './pizza.scss';

export const Pizza = ({pizza, orientation}) =>
    <div className={'Pizza Pizza--' + (orientation ? orientation : 'horizontal')}>
        <div className="Pizza__Size">
            {pizza.size?.name}
        </div>
        <div className="Pizza__Base">
            {pizza.base?.name}
        </div>
        <ul className="Pizza__Toppings">
            { pizza.toppings.map((topping, i) => <li key={i} className="Pizza__Topping">{topping.name}</li>) }
        </ul>
        {!orientation || orientation === 'horizontal' ? <div className="Pizza__Price">
            <Currency number={pizza.total}></Currency>
        </div> : ''}
    </div>;
