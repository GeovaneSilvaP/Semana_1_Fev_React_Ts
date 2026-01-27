type Button = {
  label: string;
  disabel?: boolean;
  onClick: () => void;
};

const PropsEx4 = ({label, disabel=false, onClick}:Button) => {
  return (
    <div>
        <h2>⭐ Desafio Extra — Componente Button (nível mercado)</h2>
     <button disabled={disabel} onClick={onClick}>{label}</button>
    </div>
  );
};

export default PropsEx4;
