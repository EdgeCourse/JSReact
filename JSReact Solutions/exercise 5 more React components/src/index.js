import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let scope = {
  title: "My React App",
  footerText: "footer text",
  color: "blue",
  message: "",
  selectedIndex: -1,
  handleChange: handleChange,
  handleButtonClick: handleButtonClick,
  handleListItemClick: handleListItemClick,
  author: { 
          name:"John Doe", 
          phone: "800-555-1212", 
          email: "jdoe@gmail.com" 
      }
      , books: [
        {isbn:'123', title:'The Time Machine', price:5.95 },
        {isbn:'123', title:'War of the Worlds', price:6.95 },
        {isbn:'123', title:'The Invisible Man', price:4.95 }
    ]
  }
  
ReactDOM.render(
  <React.StrictMode>
    <App {...scope}/>
  </React.StrictMode>,
  document.getElementById('root')
);

function renderApp(scope){
  ReactDOM.render(
    <React.StrictMode>
      <App {...scope} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

function handleChange(event){
  scope[event.currentTarget.name] = event.currentTarget.value;
  renderApp(scope);
}

function handleButtonClick(event){
  scope.message = "You like the color " + scope.color + "!";
  renderApp(scope);
}

function handleListItemClick(event, index){
  scope.selectedIndex = index;
  const book = scope.books[index];
  renderApp(scope);
  console.log("You chose: " + book.isbn + ", " +
   book.title + ", " + book.price);
}

reportWebVitals();

renderApp(scope);