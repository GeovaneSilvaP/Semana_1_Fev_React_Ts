import React, { useState } from "react";

type Form = {
  name: string;
  age: number;
  email: string;
  role?: "admin" | "user";
};

const Projeto = () => {
  const [form, setForm] = useState<Form>({
    name: "",
    age: 0,
    email: "",
    role: "user",
  });

  const myForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Dados Enviados", form);
    alert("Formulário Enviado com sucesso");
  };

  return (
    <div>
      <h2>⭐ MINI-PROJETO — Formulário Tipado Completo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cargo:
          <select name="role" value={form.role} onChange={myForm}>
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <label>Nome: {form.name}</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={myForm}
          placeholder="Digite o seu nome..."
          required
        />

        <label>Idade: {form.age}</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={myForm}
          placeholder="Digite a sua idade..."
          required
        />

        <label>Email: {form.email}</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={myForm}
          placeholder="Digite o seu email..."
          required
        />

        <input type="submit" value={"Enviar"} />
      </form>
    </div>
  );
};

export default Projeto;
