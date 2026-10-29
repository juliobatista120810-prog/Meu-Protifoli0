import { useState } from "react";

function Home() {
  const [inputLogin, setInputLogin] = useState("");
  function efetuarLogin() {
    if (inputLogin == "admin") {
      alert("Voce recebeu acesso de admin do sistema");
    } else {
      alert("Voce digitou errado, o login é admin");
    }
  }
  return (
    <div className="app">
      <h1>Inputs Controlados</h1>
      <label htmlFor="">Login</label>

      <input
        type="text"
        value={inputLogin}
        onChange={(e) => setInputLogin(e.target.value)}
      />
      <p>{inputLogin}</p>
      <button onClick={efetuarLogin}>Entrar</button>
    </div>
  );
}

export default Home;
