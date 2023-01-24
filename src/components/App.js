import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer, { initialState } from '../reducers/index.js'
import { addOne, applyNumber, changeOperation, clearDisplay, recallMemory, setMemory, clearMemory } from '../actions';




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const applyNum = (e) => {
    dispatch(applyNumber(e.target.value));
  }
  
  const changeOp = (e) => {
    dispatch(changeOperation(e.target.value));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(setMemory())} />
              <CalcButton value={"MR"} onClick={() => dispatch(recallMemory())}/>
              <CalcButton value={"MC"} onClick={() => dispatch(clearMemory())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={applyNum}/>
              <CalcButton value={2} onClick={applyNum}/>
              <CalcButton value={3} onClick={applyNum}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={applyNum}/>
              <CalcButton value={5} onClick={applyNum}/>
              <CalcButton value={6} onClick={applyNum}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={applyNum}/>
              <CalcButton value={8} onClick={applyNum}/>
              <CalcButton value={9} onClick={applyNum}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={changeOp}/>
              <CalcButton value={"*"} onClick={changeOp}/>
              <CalcButton value={"-"} onClick={changeOp}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
