type PropsOpcional = {
  title: string;
  color?: "sucess" | "error";
};

const PropsEx2 = ({ title, color }: PropsOpcional) => {
  return (
    <div>
      <h2>Exercício 2 — Props opcionais</h2>
      <p>{color === "sucess" ? "✅" : "❌"} {title}</p>
    </div>
  );
};

export default PropsEx2;
