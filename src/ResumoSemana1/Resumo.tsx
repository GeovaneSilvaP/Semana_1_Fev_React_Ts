import React, { useState, type ReactNode } from "react";

//📌 1️⃣ Tipagem de Props (base de tudo)
type TipagemProps = {
  title: string;
  disabled?: boolean;
};

//📌 2️⃣ interface vs type
type Status = "online" | "offiline" | "error";

//📌 3️⃣ Union Types (controle de valores)
const [estudos, setEstudos] = useState<"React" | "TypeScripit">("TypeScripit");

//📌 4️⃣ useState tipado
const [count, setCount] = useState<number>(0);

//📌 5️⃣ Tipagem de Eventos (forms sem dor)
function handleForm(e: React.FormEvent<HTMLInputElement>) {
  e.preventDefault();
}

//📌 6️⃣ children no React + TS
type Children = {
  children: ReactNode;
};


const Resumo = () => {
  return <div></div>;
};

export default Resumo;
