import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

function timeUpdate(){
  const element = (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  const secondElement = <div>'Hey even I am present'</div>;

  ReactDOM.render(
      element,
      document.getElementById('main')
  );

  ReactDOM.render(secondElement, document.getElementById('root'));
}

function Welcome (props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
    element,
    document.getElementById('customFunction')
);

setInterval(timeUpdate, 1000);


