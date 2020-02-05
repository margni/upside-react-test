import React from 'react';

import {Currency} from './Currency';

import './checkGroup.scss';

export const CheckGroup = ({onSelect, selected, options, name}) => <div className="CheckGroup">
    <h3 className="CheckGroup__Title">{name}</h3>
    {options.map((option, i) => <React.Fragment key={i}>
        <input
            checked={selected.findIndex((o) => o.name === option.name) > -1}
            className="CheckGroup__Checkbox"
            id={option.name}
            name={name}
            onChange={() => onSelect(option)}
            type="checkbox"
            value={option.name}
        />
        <label htmlFor={option.name} className="CheckGroup__Label">
            <strong className="CheckGroup__Name">{option.name}</strong>
            <Currency number={option.price}></Currency>
        </label>
    </React.Fragment>)}
</div>;
