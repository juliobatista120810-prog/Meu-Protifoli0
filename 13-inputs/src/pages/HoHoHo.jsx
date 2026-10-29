import React, { useState } from "react";

function HoHoHo() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  function falarHo() {
    let texto = "";

    for (let i = 0; i < Number(numero); i++) {
      if (i > 0) {
        texto = texto + " ";
      }

      texto = texto + "Ho";
    }

    setResultado(texto + "!");
  }

  return (
    <div className="HoHoHo">
      <h1>Papai Noel</h1>

      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Digite um número"
        min="1"
        max="1000000"
      />

      <button onClick={falarHo}>Falar Ho!</button>

      <p>{resultado}</p>
    </div>
  );
}

export default HoHoHo;
