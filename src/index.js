import React, { createContext, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import routes from './routes';
import './index.css';
import HookContext from './HookContext';
import HookEffect from './HookEffect';
import HookReducer from './HookReducer';
import HookState from './HookState';
import ClassState from './ClassState';
import * as serviceWorker from './serviceWorker';

const AppContext = createContext({ value: null, handleChange: Function.prototype });

function App() {
  const [value, setValue] = useState(null);

  const handleChange = (option) => {
    setValue(option);
  };

  const componentMap = {
    "/class/state": <ClassState/>,
    "/hook/state": <HookState/>,
    "/hook/reducer": <HookReducer/>,
    "/hook/context": <HookContext/>,
    "/hook/effect": <HookEffect/>,
  };

  return (
    <AppContext.Provider value={{ value, handleChange }}>
      <div>
        <Nav/>
        {value ? componentMap[value.value] : (
          <DefaultView/>
        )}
      </div>
    </AppContext.Provider>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

function DefaultView() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="counter">
          Choose a view ☝
        </div>
      </header>
    </div>
  )
}

function Nav() {
  const { value, handleChange } = useContext(AppContext);
  return (
    <nav>
      <Select value={value} options={routes} onChange={handleChange}/>
    </nav>
  );
}
