import React, { useState } from "react";

//📌 Tipos de eventos mais usados (DECORAR)

//React.ChangeEvent<HTMLInputElement>
//React.ChangeEvent<HTMLSelectElement>
//React.ChangeEvent<HTMLTextAreaElement>

//📌 Exemplo:
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value);
}

//🔹 Submit de formulário
function handleForm(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log("Form enviado");
}

//🔹 Clique (botão, div, etc.)
function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log("Clicou");
}

//2️⃣ Formulários controlados com TypeScript
type Form = {
  name: string;
  age: number;
  email: string;
};

const [myForm, setMyForm] = useState<Form>({ name: "", age: 0, email: "" });

//3️⃣ Tipagem de funções
type ButtonProps = {
  onClick: () => void;
};

const EventosTipadosForm = () => {
  //🧩 Eventos inline
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </div>
  );
};

export default EventosTipadosForm;
