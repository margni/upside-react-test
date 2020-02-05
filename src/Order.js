import React from 'react';

import {Currency} from './Currency';
import {EditPizza} from './EditPizza';
import {Pizza} from './Pizza';

import './order.scss';

export class Order extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {editing: -1};
    }

    render() {
        if (this.state.editing > -1) {
            const done = () => this.setState({editing: -1});
            const pizza = this.props.order.items[this.state.editing];

            return <EditPizza pizza={pizza} options={this.props.options} onDone={done} onSelect={(property, value) => this.props.modifyPizza(pizza, property, value)}></EditPizza>
        }

        const edit = i => this.setState({editing: i});
        const add = this.props.order.placed ? '' : <button className="Order__Button Button" onClick={() => this.props.addPizza() && edit(this.props.order.items.length)}>Add</button>;
        const place = !this.props.order.placed && this.props.order.items.length ? <button className="Order__Button Order__Button--right Button">Place My Order</button> : '';
        const placed = this.props.order.placed ? <div>{this.props.order.placed.toDateString()}</div> : '';

        const items = this.props.order.items.map((pizza, i) => <div className="Order__Item" key={i}>
            <div className="Order__Pizza"><Pizza pizza={pizza}></Pizza></div>
            <button className="Button" onClick={() => edit(i)}>Edit</button>&nbsp;
            <button className="Button" onClick={() => this.props.removePizza(pizza)}>Remove</button>
        </div>);

        return <div>
            <header className="Order__Header">
                <h1 className="Order__Heading">Your Order</h1>
                {add}
            </header>
            {placed}
            {items}
            <footer className="Order__Footer">
                <h2 className="Order__Price">Total <Currency number={this.props.order.total}></Currency></h2>
                {place}
            </footer>
        </div>
    }
}
