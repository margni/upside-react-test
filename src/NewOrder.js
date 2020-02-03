// connect order?
import { connect } from 'react-redux';

import { addPizza, modifyPizza, removePizza } from './actions';
import { Order } from './Order';

export const NewOrder = connect(
    state => ({
        options: state.options,
        order: state.newOrder
    }),
    {
        addPizza,
        modifyPizza,
        removePizza
    }
)(Order);
