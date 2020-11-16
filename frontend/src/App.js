import './App.css';
import React from 'react';

import CatalogPage from './Catalog/Catalog';
import LoginPage from './Login/LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.changeName = this.changeName.bind(this);
    }

    changeName(nameVal) {
        this.setState({name: nameVal});
    }

    render() {
        return (
            <div>
                
                {/* <p>{this.state.name}</p> */}
                {/* <CatalogPage msg={this.state.name} changeName={this.changeName}/> */}
                <LoginPage/>
            </div>
        )
    }
}


export default App;
