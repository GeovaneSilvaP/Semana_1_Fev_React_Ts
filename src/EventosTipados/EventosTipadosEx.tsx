import React, { useState } from "react";

const EventosTipadosEx = () => {
  //🟢 Exercício 1 — Input controlado
  const [name, setName] = useState<string>("");

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div>
      <h2>🟢 Exercício 1 — Input controlado</h2>
      <p>{name}</p>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Digite algo"
      />
    </div>
  );
};

export default EventosTipadosEx;
