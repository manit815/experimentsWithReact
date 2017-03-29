import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Clock from './Clock';
import './index.css';

function timeUpdate(){
  const secondElement = <div>'Hey even I am present'</div>;

  ReactDOM.render(
      <Clock />,
      document.getElementById('main')
  );

  ReactDOM.render(secondElement, document.getElementById('root'));
}

function Welcome (props) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (<div>
    <Welcome name="Sara" />
    <Welcome name="Manit" />
  </div>);
}

ReactDOM.render(
    <App />,
    document.getElementById('customFunction')
);

setInterval(timeUpdate, 1000);


