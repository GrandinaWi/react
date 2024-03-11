import logo from './logo.svg';
import {useState,useEffect} from "react";
import Input from "./components/input";
import Numer from "./components/numer";
import './App.css';

function App() {
  const [input,setInput]=useState(0);
  const [input2,setInput2]=useState(0);
  const [action,setAction]=useState(false);
  const [whatAction,setWhatAction]=useState('');
  const numberButtons = [];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  useEffect(() => {
   setInput2(0);
  }, [action]);
  function clickNumber(num){
    if (action===false) {
      if (input == 0) {
        setInput(num);
      } else {
        setInput(prev => Number(prev) * 10 + Number(num));
      }

    }else{
      if (input2 == 0) {
        setInput2(num);
      } else {
        setInput2(prev => Number(prev) * 10 + Number(num));
      }

    }
  }
  function clickClear(){
    setInput(0);
    setInput2(0);
  }
  function clickPlus(){
    setAction(true)
    setWhatAction('+');
  }
  function clickMinus(){
    setAction(true);
    setWhatAction('-');
  }
  function сlickMulti(){
    setAction(true);
    setWhatAction('*');
  }
  function clickDivis(){
    setAction(true);
    setWhatAction(':');
  }
  function result(whatAction) {
    setAction(false);
    switch (whatAction) {
      case '+':
        setInput(input + input2);
        break;
      case '-':
        setInput(input-input2);
        break;
      case '*':
        setInput(input*input2);
        break;
      case ':':
        setInput(input/input2);
        break;
    }

  }




  return (
      <div id="calculator">

        <div className="top">
          <span className="clear" onClick={clickClear}>C</span>
          <Input
              value={input}
              value2={input2}
              action={action}
          />
        </div>

        <div className="keys">
          {
            numbers.map((num) => (
                <Numer clickNumber={() => clickNumber(num)} number={num} key={num}>{num}</Numer>
            ))
          }
          <span onClick={clickDivis} className="operator">÷</span>
          <span onClick={clickMinus} className="operator">-</span>
          <span onClick={clickPlus} className="operator">+</span>
          <span onClick={() => result(whatAction)} className="eval">=</span>
          <span onClick={сlickMulti} className="operator">x</span>
        </div>
      </div>
  );
}

export default App;
