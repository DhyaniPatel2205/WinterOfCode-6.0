import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Link>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* Other routes */}
      </Link>
    </Router>
  );
};

export default App;
