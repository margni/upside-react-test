import {ADD_PIZZA, MODIFY_PIZZA, REMOVE_PIZZA} from '../actions';

const getPizzaTotal = (pizza) => pizza.size.price + pizza.base.price + pizza.toppings.reduce((total, topping) => total + topping.price, 0);
const makeOrder = items => ({items, total: items.reduce((total, pizza) => total + pizza.total, 0)});

// todo just use an external to do immutable state.
export const newOrder = (order = {items: [], total: 0}, action) => {
    switch (action.type) {
        case ADD_PIZZA:
            return makeOrder([
                ...order.items,
                {
                    ...action.pizza,
                    total: getPizzaTotal(action.pizza)
                }
            ]);

        case MODIFY_PIZZA:
            return makeOrder(order.items.map(pizza => {
                if (pizza !== action.pizza) return pizza;

                if (Array.isArray(action.pizza[action.property])) {
                    let index = action.pizza[action.property].indexOf(action.value);
                    if (index > -1) {
                        action.pizza[action.property] = action.pizza[action.property].filter((val) => val !== action.value);
                    } else {
                        action.pizza[action.property].push(action.value);
                    }
                } else {
                    action.pizza[action.property] = action.value;
                }
                return {
                    ...action.pizza,
                    total: getPizzaTotal(action.pizza)
                };
            }));

        case REMOVE_PIZZA:
            return makeOrder(order.items.filter((val) => val !== action.pizza));

        default:
            return order;
    }
};
