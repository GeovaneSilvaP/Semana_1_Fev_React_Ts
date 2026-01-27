type UserStatus = {
  name: string;
  status: "online" | "offline";
  showStatus?: boolean;
  onToggleStatus: () => void;
};

const PropsEx5 = ({
  name,
  status,
  showStatus = true,
  onToggleStatus,
}: UserStatus) => {
  return (
    <div>
      <h2>Exercicio extra</h2>

      <p>{name}</p>
      {showStatus && (status === "online" ? "🟢 Online" : "🔴 Offline")}

      <button onClick={onToggleStatus}>Alterar status</button>
    </div>
  );
};

export default PropsEx5;
