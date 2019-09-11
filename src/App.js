import React,{PureComponent}from 'react';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./common/header";
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import write from './pages/write';
import {Globalstyle} from "./style";
import {IconFont} from "./statics/iconfont/iconfont";
import store from './store';


class App extends PureComponent{
    render(){
        return (
            <Provider store={store}>
                    <Globalstyle/>
                    <IconFont/>
                    <Router>
                        <Header/>
                        <Route path="/" exact component={Home} />
                        <Route path="/detail/:id" exact component={Detail} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/write" exact component={write} />
                    </Router>
            </Provider>
        );
    }
}

export default App;
