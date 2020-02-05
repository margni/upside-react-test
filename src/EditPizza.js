import React from 'react';

import {CheckGroup} from './CheckGroup';
import {Currency} from "./Currency";
import {Pizza} from "./Pizza";
import {RadioGroup} from './RadioGroup';

import './editPizza.scss';

export const EditPizza = ({onSelect, onDone, pizza, options}) => {
    const toppings = pizza.base ? <React.Fragment>
        <h2 className="EditPizza__Heading">Toppings</h2>
        {options.toppings.map((toppingGroup, i) =>
            <CheckGroup key={i} name={toppingGroup.group} options={toppingGroup.items} selected={pizza.toppings} onSelect={(value) => onSelect('toppings', value)}></CheckGroup>
        )}
    </React.Fragment> : '';

    return <div className="EditPizza">
        <aside className="EditPizza__Aside">
            <div className="EditPizza__Summary">
                <h3 className="EditPizza__Heading">Your Pizza</h3>
                <Pizza pizza={pizza} orientation="vertical"></Pizza>
            </div>
            <Currency number={pizza.total}></Currency>
            <button disabled={!pizza.size || !pizza.base || pizza.toppings.length < 1} className="EditPizza__Done Button" onClick={onDone}>Done</button>
        </aside>
        <RadioGroup name="Size" options={options.sizes} selected={pizza.size} onSelect={(value) => onSelect('size', value)}></RadioGroup>
        {pizza.size ? <RadioGroup name="Base" options={options.bases} selected={pizza.base} onSelect={(value) => onSelect('base', value)}></RadioGroup> : ''}
        {toppings}
    </div>;
};
