import './App.css';

function App(props) {
  return (
    <div className={'boxed'}>
      <Header title={props.title} />
      <Body {...props} />
      <Footer text={props.footerText} />
    </div>
  );
}

const divStyle = {
                backgroundColor: 'lightgrey',
                margin: '0px',
                padding: '5px', 
                textAlign: 'center',
            };               

function Header(props){
  return <h3 style={divStyle} >{props.title}</h3>;
}

function Body(props){
  return ( <div>
    <p>Author:{props.author.name}</p>
    <BookList {...props} />        
    <p>Enter your favorite color:</p>
    <input type='text' name='color' 
	     value={props.color}
       onChange = {props.handleChange} />
    <input type='button' 
        value='Click Here'
        onClick = {props.handleButtonClick} />
    <p>{props.message}</p> 
    </div> );
}

function BookList(props){
  return (
    <ul>
      {props.books.map(
        (book,index)=>{
          return (<li key={index}
          onClick = {(e)=>props.handleListItemClick(e, index)}
          className={ index === props.selectedIndex ? "selected":""}
        >{book.title}</li>)}
      )}
    </ul>
  );
}

function Footer(props){
  return ( <div><h4 style={divStyle} >{props.text}</h4></div> );
}

export default App;
