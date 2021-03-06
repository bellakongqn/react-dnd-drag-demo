import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom';
import Chat from './HigerOrderComponent/Chat';
import DragDemo from './DragNew/DragDemo';
import Facc from './Facc/Index';
import ContextApi from './ContextApi/ContextApi';
import ChangeTheme from './ChangeTheme/ChangeTheme'
import PureRedux from './Redux/PureRedux';
import Counter from './Counter/Counter';
import ReduxThunk from './ReduxThunk/ReduxThunk';
import About from './Page/About';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/chat">Chat</Link></li>
              <li>
              <Link to="/drag">drag</Link>
              </li>
              
              <li>
                <Link to="/facc">FACC</Link>
              </li>
              <li>
                <Link to="/contextApi">ContextApi</Link>
              </li>
              <li>
                 <Link to="/changeTheme">ChangeTheme</Link>
              </li>
              <li>
                <Link to="/pureRedux">PureRedux</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
              <Link to="/reduxThunk">ReduxThunk</Link>
              </li>
                
                
               
              
            </ul>
            <div>
              {/* 保证下面的route，即使有多个与路径匹配，也只有第一个会显示 */}
            <Switch>
              <Route path="/chat" render={() => <Chat/>} />
              {/* <Route path="/chat/" Component={Chat} /> */}
              <Route path="/drag" render={() => <DragDemo/>}/>
              <Route path="/drag" render={() => <About/>}/>
              <Route path="/about" render={() => <About/>} />
              <Route path="/facc" render={() => <Facc/>}/>
              <Route path="/contextApi"  render={() => <ContextApi/>} />
              <Route path="/changeTheme" render={() => <ChangeTheme/>} />
              <Route path="/pureRedux" render={() => <PureRedux/>} />
              <Route path="/counter" render={() => <Counter/>}  />
              <Route path="/reduxThunk" render={() => <ReduxThunk/>}  />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;