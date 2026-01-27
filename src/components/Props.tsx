//PropsEx
import PropsEx from "../PropsEx/PropsEx";
import PropsEx2 from "../PropsEx/PropsEx2";
import PropsEx3 from "../PropsEx/PropsEx3";
import PropsEx4 from "../PropsEx/PropsEx4";
import PropsEx5 from "../PropsEx/PropsEx5";

const Props = () => {
  return (
    <div>
      <PropsEx id={1} name="Geovane" isStudante={true} />
      <PropsEx2 title="Props opcionais" color="sucess" />
      <PropsEx3 title="React + TS" description="Estudando Props" />
      <PropsEx4 label="Clique aqui" onClick={() => alert("Clicou")} />
      <PropsEx5
        name="Typescript + React"
        status="online"
        onToggleStatus={() => alert("Alterou o status")}
      />
    </div>
  );
};

export default Props;
