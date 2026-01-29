import { useState } from "react";

//🟠 3. useState com Union Types

type Status = "loading" | "success" | "error";

const UseStateEx3 = () => {
  const [status, setStatus] = useState<Status>("loading");

  return (
    <div>
      <p>{status}</p>
      <input
        type="text"
        value={status}
        onChange={() => setStatus(status === "loading" ? "success" : "error")}
      />
    </div>
  );
};

export default UseStateEx3;
