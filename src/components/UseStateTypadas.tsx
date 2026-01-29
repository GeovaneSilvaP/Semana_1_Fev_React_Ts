import { useState } from "react";

const UseStateTypadas = () => {
  //inferência automatica de tipos
  const [count, setCount] = useState(0);

  function myCount() {
    setCount((prev) => prev + 1);
  }

  //Tipagem explícita no useState
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string | null>("");

  function myName() {
    setName("Geovane");
  }

  //useState com Union Types
  type Status = "loading" | "success" | "error";
  const [status, setStatus] = useState<Status>("loading");

  //useState com objetos tipados
  interface User {
    name: string;
    age: number;
  }

  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
  });

  function myUser() {
    setUser((prev) => ({
      ...prev,
      name: "Geovane",
      age: 23,
    }));
  }

  //useState com arrays tipados
  type Todo = {
    id: number;
    text: string;
  };

  const [myText] = useState<Todo[]>([
    {
      id: 1,
      text: "React",
    },
    {
      id: 2,
      text: "TypeScript",
    },
  ]);

  //useState com null ou dados assíncronos
  interface MyAPI {
    name: string;
    email: string;
  }

  const [users, setUsers] = useState<MyAPI | null>(null);

  //🧪 Mini exemplo completo
  type Theme = "ligth" | "dark";

  const [theme, setTheme] = useState<Theme>("ligth");

  function myTheme() {
    setTheme((prev) => (prev === "ligth" ? "dark" : "ligth"));
  }

  return (
    <div>
      <section>
        {/*inferência automatica de tipos */}
        {count}
        <button onClick={myCount}>Contador</button>
      </section>

      <section>
        {/*Tipagem explícita no useState*/}
        {name}
        <button onClick={myName}>Meu Nome</button>
      </section>

      <section>
        {/*useState com Union Types */}
        <p>Status: {status}</p>
        <button onClick={() => setStatus("success")}>mudar status</button>
      </section>

      <section>
        {/*useState com objetos tipados */}
        <p>{user}</p>
        <button onClick={myUser}>mudar usuario</button>
      </section>

      <section>
        {/*useState com arrays tipados */}
        <ul>
          {myText.map((text) => (
            <li key={text.id}>{text.text}</li>
          ))}
        </ul>
      </section>

      <section>
        {/*useState com null ou dados assíncronos */}
        {users && <p>{users.email}</p>}
      </section>

      <section>
        {theme}
        <button onClick={myTheme}>Mudar tema</button>
      </section>
    </div>
  );
};

export default UseStateTypadas;
