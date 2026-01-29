import { useState } from "react";

const UseStateEx = () => {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount((prev) => prev + 1);
  }

  function decrementar() {
    setCount((prev) => prev - 1);
  }
  return (
    <div>
      <h2>🟢 Exercício 1 — Inferência automática</h2>
      <p>Contagem: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default UseStateEx;
