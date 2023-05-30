import React from "react";

export default function SkipFirstRenderEffect() {
  const [count, setCount] = React.useState(0);
  const skipFirstRenderRef = React.useRef(true);
  
  React.useEffect(() => {
    if(skipFirstRenderRef.current) {
      skipFirstRenderRef.current = false;
      return
    }
    console.log('run effect', count)
  },  [count])
  
  return (
    <div className="App">
      <h2>Test02: Skip first render</h2>

      <button type="button" onClick={() => setCount(prevState => prevState + 1)}>Submit</button>
    </div>
  );
}