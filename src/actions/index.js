export const ADD_PIZZA = 'ADD_PIZZA';
export const REMOVE_PIZZA = 'REMOVE_PIZZA';
export const MODIFY_PIZZA = 'MODIFY_PIZZA';

export const addPizza = pizza => ({ type: ADD_PIZZA, pizza });
export const modifyPizza = (pizza, property, value) => ({ type: MODIFY_PIZZA, pizza, property: property, value});
export const removePizza = pizza => ({ type: REMOVE_PIZZA, pizza });
