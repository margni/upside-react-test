import React from 'react';

import {CheckGroup} from './CheckGroup';
import {RadioGroup} from './RadioGroup';
import {Currency} from "./Currency";

export const EditPizza = ({onSelect, onDone, pizza, options}) => {
    const toppings = options.toppings.map((toppingGroup, i) =>
        <CheckGroup key={i} name={toppingGroup.group} options={toppingGroup.items} selected={pizza.toppings} onSelect={(value) => onSelect('toppings', value)}></CheckGroup>
    );

    return (
        <div>
            <RadioGroup name="Size" options={options.sizes} selected={pizza.size} onSelect={(value) => onSelect('size', value)}></RadioGroup>
            <RadioGroup name="Base" options={options.bases} selected={pizza.base} onSelect={(value) => onSelect('base', value)}></RadioGroup>
            <h2 className="EditPizza__Heading">Toppings</h2>
            {toppings}
            <h2 className="EditPizza__Heading">
                Total&nbsp;
                <Currency number={pizza.total}></Currency>
            </h2>
            <button className="Button" onClick={onDone}>Done</button>
        </div>
    );
};
