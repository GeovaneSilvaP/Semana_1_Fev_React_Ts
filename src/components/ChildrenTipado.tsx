import { ReactNode } from "react";

//🧠 O que é children no React?
//children é tudo o que você coloca ENTRE a abertura e o fechamento de um componente.

type CardProps = {
  title: string;
  children: ReactNode;
};

const ChildrenTipado = ({ title, children }: CardProps) => {
  return (
    <div>
      <div className="card">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ChildrenTipado;
