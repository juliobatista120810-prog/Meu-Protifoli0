import React, { useState } from "react";

function Demo() {
  const [inputNota1, setInputNota1] = useState("");
  const [inputNota2, setInputNota2] = useState("");
  const [resultado, setResultado] = useState("Digite suas notas e aperte o butaozin");
    function calcularMedia(){
        let n1 = Number(inputNota1)
        let n2 = Number(inputNota2)
        let media = (n1 + n2) / 2
        setResultado(media)
    }
  return (
    <div className="demo">
      <h1>Demo - médias</h1>
      <label htmlFor="">Nota1</label>

      <input
        type="text"
        value={inputNota1}
        onChange={(e) => setInputNota1(e.target.value)}
      />

    <label htmlFor="">Nota2</label>

    <input
        type="text"
        value={inputNota2}
        onChange={(e) => setInputNota2(e.target.value)}
      />

      <button onClick={calcularMedia}>Calcular</button>

      <p>
         {resultado}
      </p>


    </div>
  );
}

export default Demo;
