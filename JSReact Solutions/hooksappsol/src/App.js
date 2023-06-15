import React, { useState, useEffect } from 'react';
import './App.css';

import { getBooks } from './rest';
import BookList from './components/booklist';
import BookForm from './components/bookform';


function App() {
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);  
  const [books, setBooks] = useState([]);
useEffect(() => {
  let promise = getBooks();
  promise.then(
    (text) => {
      let bookArray = JSON.parse(text);
      setBooks(bookArray);
    }
  )
}, [refreshFlag]);

  const Conditional = function(){ 
    if(selectedBook != null){
      return <BookForm book={selectedBook} 
              setBook={setSelectedBook} 
              refresh={refresh} 
             /> 
    }
    return <div/>
  }

  const refresh = function(noChanges=false){ 
    if(!noChanges){
      setRefreshFlag(refreshFlag  + 1 );
    } 
    setSelectedBook(null);
  }

return (
  <div className="App">
    <h3>React Book Project</h3>
    <BookList books={books} selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
    <Conditional />
  </div>
  );
}

export default App;
