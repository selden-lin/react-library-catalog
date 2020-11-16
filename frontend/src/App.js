import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    render() {
        return (
            <div>
                <input type="text"/>
                <button>Save</button>
            </div>
        )
    }
}


export default App;
