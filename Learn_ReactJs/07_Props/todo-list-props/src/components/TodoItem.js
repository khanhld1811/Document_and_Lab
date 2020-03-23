import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { options } = this.props;
        return (
            <div className="TodoItem">
                <h1>Đi NET</h1>
                <p>{this.props.title}</p>
                <p>{options !== undefined ? options.name : 'not data'}</p>
            </div>
        )
    }
}

export default TodoItem;