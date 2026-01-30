import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
};

const EventosTipadosEx2 = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h2>🟡 Exercício 2 — Formulário tipado</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Nome"
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default EventosTipadosEx2;
