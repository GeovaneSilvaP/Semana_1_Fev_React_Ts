import React from "react";

//📘 1️⃣ Union Types
//👉 Aqui, status só pode ser um desses três valores.
type Status = "loading" | "success" | "error";

const status: Status = "success";

//No React (muito comum)
type ButtonProps = {
  text: string;
  variant: "primary" | "secondary";
};

function Button({ text, variant }: ButtonProps) {
  return <button className={variant}>{text}</button>;
}

//📘 2️⃣ Props opcionais (?)
//👉 description pode existir ou não
//👉 O ? é essencial para evitar erros do TS
type Cardprops = {
  title: string;
  description?: string;
};

//📘 3️⃣ Children tipado corretamente
//No React + TS, children deve ser tipado explicitamente.
//React.ReactNode aceita: Texto | JSX | Componentes | Fragmentos
type ContainerProps = {
    children: React.ReactNode
}

function Container({children}:ContainerProps) {
    return <div className="container">{children}</div>
}

const UnionTypesTypadas = ({ title, description }: Cardprops) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default UnionTypesTypadas;
