import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">主页</Link>
            <Link to="/detail">详情</Link>
          </li>
        </ul>
      </div>

      <div>
        <Route exact={true} path="/" render={()=>(<Redirect to="/home"/>)}/>
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
      </div>
    </Router>
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
