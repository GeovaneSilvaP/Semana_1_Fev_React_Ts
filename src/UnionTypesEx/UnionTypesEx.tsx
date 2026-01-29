//🟢 Exercício 1 — Union Type básico
type AlertProps = "success" | "error" | "warning";

type AlertType = {
  type: AlertProps;
  message: string;
};

function Alert({ type, message }: AlertType) {
  return (
    <div className={`alert alter-${type}`}>
      {type === "success" && <strong>✅ Sucesso:</strong>}
      {type === "error" && <strong>❌ Erro:</strong>}
      {type === "warning" && <strong>⚠️ Atenção:</strong>}
      <span>{message}</span>
    </div>
  );
}

const UnionTypesEx = () => {
  return (
    <div>
      <h2>🟢 Exercício 1 — Union Type básico</h2>
      <Alert type="success" message="Operação realizada com sucesso!" />
      <Alert type="error" message="Algo deu errado" />
      <Alert type="warning" message="Verifique os dados informados." />
    </div>
  );
};

export default UnionTypesEx;
