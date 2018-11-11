import React, { Component } from 'react';
import { GleobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
             <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>
            </div>
          </BrowserRouter>
          <Iconfont />
          <GleobalStyle />
        </div>
      </Provider>
    );
  }
}

export default App;
