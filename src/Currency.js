import React from 'react';

export const Currency = ({number}) => {
    return <React.Fragment>
        {new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP'}).format(number * .01)}
    </React.Fragment>;
};
