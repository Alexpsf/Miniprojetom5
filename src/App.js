import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Suggestions from './components/Suggestions';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Biblioteca LGBT</h1>
        <Switch>
          <Route path="/" exact component={Suggestions} />
          <Route path="/search" component={BookSearch} />
          <Route path="/book/:id" component={BookDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
