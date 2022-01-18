import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import BootstrapHeader from './components/BootstrapHeader';
import Coches from './components/Coches';
import { MenuItems } from './data/MenuItems';

export function App() {
  return (
    <Router>
      <Header />
      <BootstrapHeader />
      <Coches/>
      {MenuItems.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
