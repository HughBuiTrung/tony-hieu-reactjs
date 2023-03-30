import React from 'react';
import Button from './components/Button';

function Refs() {
  const [, setSession] = React.useState(false);
  let sessionRef = React.useRef(false);
  const inputRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
    buttonRef.current.style.backgroundColor = '#f00'
  },[])
  
  return (
    <div>
      <h2>Refs</h2> <br />
      <input ref={inputRef} type="text" />
      <button 
        type="button"
        onClick={() => {
          setSession(true);
          sessionRef.current = true;
          inputRef.current.focus();
        }}
      >
        Update Session
      </button>
      {sessionRef.current ? 'yes' : 'none'}

      <h3>Forward Ref</h3>
      <Button 
        ref={buttonRef}
        text="Forward Ref"
      />
    </div>
  )
}

export default Refs