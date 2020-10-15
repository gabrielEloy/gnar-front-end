import React from 'react';
import FileUpload from './routes/FileUpload';
import Header from './components/Header';
import './app.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GetRoutes from './routes/GetRoutes';

const App = () => (
  <Router>
    <div className='container mt-4'>
      <Header />
      <Switch>
        <Route exact path="/">
          <FileUpload />
        </Route>
        <Route path="/uploads/:id">
          <GetRoutes />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
