import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppContainer = ({ routes }) => {
  return (
    <Router>
      <div className="App">
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </div>
    </Router>
  );
};

export default AppContainer;
