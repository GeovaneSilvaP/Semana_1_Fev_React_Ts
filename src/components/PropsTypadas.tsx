//exemplo prop com typeScript
interface CardrProps {
  title: string;
}

function Card(prop: CardrProps) {
  return <h2>{prop.title.toLocaleUpperCase()}</h2>;
}

//Tipagem básica com interface
interface UserProp {
  nome: string;
  idade: number;
}

//Tipagem com type
type ProductProps = {
  price: number;
  title: string;
};

//INTERFACE = mais usada para props e objetos
//TYPE = mais flexível (union, intersection, etc)

//Props opcionais
interface ButtonProps {
  text: string;
  color?: string;
}

const PropsTypadas = (
  { nome, idade }: UserProp,
  { price, title }: ProductProps,
  { text, color }: ButtonProps,
) => {
  return (
    <div>
      <section>
        <p>{nome}</p>
        <p>{idade}</p>
      </section>

      <section>
        <p>{title}</p>
        <p>R${price}</p>
      </section>

      <section>
        <button style={{backgroundColor: color || "red"}}>{text}</button>
      </section>
    </div>
  );
};

export default PropsTypadas;
