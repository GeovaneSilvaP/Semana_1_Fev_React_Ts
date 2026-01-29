import { useState } from "react";

//🟡 2. Tipagem explícita no useState

const UseStateEx2 = () => {
  const [text, setText] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div>
      <h2>🟡 2. Tipagem explícita no useState</h2>
      <p>{text}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

    <p>{email}</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default UseStateEx2;
