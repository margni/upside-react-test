import { combineReducers } from 'redux';

import { account } from './account';
import { newOrder } from './newOrder';
import { options } from './options';
import { previousOrders } from './previousOrders';

export const rootReducer = combineReducers({
    account,
    newOrder,
    options,
    previousOrders
});
