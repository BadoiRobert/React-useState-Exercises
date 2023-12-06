  import { useState } from "react";

  function Counter() {
    // Inlocuieste variabila count cu o variabila de tip state folosind useState (ca in exemplul pe care l am facut impreuna)
    const [count, setCount] = useState(0);

    // Foloseste in functa onclick functia de setare a state ului pentru a incrementa valoarea lui count
    const onClick = () => {
      setCount(count + 1);
    };


    return (
      <div className="exercise-container">
        <button onClick={onClick}>Increment</button>
        <button onClick={onClick}>Decrement</button>
        <p>Count: {count}</p>
      </div>
    );
  }

  export default Counter;
