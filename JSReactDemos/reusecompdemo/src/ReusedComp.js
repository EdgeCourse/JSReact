import React, {useState} from 'react';

const Form = ({
  inputItems = [],
  headerText = '',
  submitButtonText = 'submit',
  onSubmit = () => {}
}) => {
  const [inputValues, setInputValues] = useState({});

  const handleSubmit = () => {
   onSubmit(inputValues);
  }


  const onChange = (itemId) => {
   return (e) => {
      setInputValues({...inputValues, [itemId]: e.target.value});
    };
  };

  return (
    <div>
    <h2>{headerText}</h2>
      <form onSubmit={handleSubmit}>
        {inputItems.map((item ) => (
            <input 
            key = {item.id}
            onChange = {onChange(item.id)}
            placeholder = {item.label}
            value={inputValues[item.id] || ""} 
        />         
        ))}
        
      <input type="submit" value={submitButtonText} />
      
      </form>
</div>
  );
}

export default Form;