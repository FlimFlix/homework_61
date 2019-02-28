import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import AboutUs from "./containers/AboutUs/AboutUs";
import Home from "./containers/Home/Home"
import Layout from "./Layout";
import Contacts from "./containers/Contacts/Contacts"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={AboutUs}/>
                        <Route path="/contacts" component={Contacts}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
