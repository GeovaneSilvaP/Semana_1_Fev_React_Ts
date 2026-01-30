import React, { useState } from "react";

type Role = "frontend" | "backend" | "fullstack";

const EventosTipadosEx3 = () => {
  const [role, setRole] = useState<Role>("frontend");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as Role);
  };
  return (
    <div>
      <h2>🟠 Exercício 3 — Select tipado</h2>
      <select value={role} onChange={handleChange}>
        <option value="frontend">Front End</option>
        <option value="backend">Back End</option>
        <option value="fullstack">Full Stack</option>
      </select>

      <p>Área selecionada: {role}</p>
    </div>
  );
};

export default EventosTipadosEx3;
