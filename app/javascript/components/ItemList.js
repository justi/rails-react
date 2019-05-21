import React, { Component } from 'react'
import Item from './Item'

class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.items;
        return(
            <div className="listWrapper">
                <ul className="taskList">
                    {items.map((item) => {
                        return (
                            <Item/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default ItemList;