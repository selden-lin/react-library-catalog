import React from 'react';

import styles from './catalog.module.css'

export default class CatalogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.nameChange = this.nameChange.bind(this);
        this.saveClick = this.saveClick.bind(this);
    }

    nameChange(e) {
        this.setState({name: e.target.value});
    }

    saveClick() {
        this.props.changeName(this.state.name)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.nameChange}/>
                <button onClick={this.saveClick}>Save</button>
            </div>
        )
    }
}