import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Login from './views/login'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Login} exact path="/login" />
      </div>
    </Router>
  )
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
