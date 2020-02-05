import React from 'react';

import {Currency} from './Currency';

import './radioGroup.scss';

export const RadioGroup = ({onSelect, selected, options, name}) => <div className="RadioGroup">
    <h2 className="RadioGroup__Title">{name}</h2>
    {options.map((option, i) => <React.Fragment key={i}>
        <input
            checked={selected === option}
            className="RadioGroup__Radio"
            id={name+option.name}
            name={name}
            onChange={() => onSelect(option)}
            type="radio"
            value={option.name}
        />
        <label htmlFor={name+option.name} className="RadioGroup__Label">
            <strong className="RadioGroup__Name">{option.name}</strong>
            <Currency number={option.price}></Currency>
        </label>
    </React.Fragment>)}
</div>;
