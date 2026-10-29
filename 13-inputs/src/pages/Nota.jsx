import React, { useState } from 'react'

function Nota() {
const[nota1, setNota1] = useState("")
const[nota2, setNota2] = useState("")
const[resultado, setResultado] = useState("Coloque uma nota para ver sua média")

    function CalcularMedia(){
        let nota1 = Number(nota1);
        let nota2 = Number(nota2);
        
        let resultado = nota1 + nota2 / 2
        if(resultado >= 7){
            set("Aprovado")
        }else if(resultado < 7 && resultado >= 4){
            setResultado("Recuperação")
        }else{
            setResultado("Reprovado")
        }
    
    }
  return (
    <div className="Nota">
      <h2>Notas</h2>
      <label htmlFor="">Nota1</label>  
      <input
        type="text"
        value={nota1}
        onChange={(e) => setResultado(e.target.value)}
      />
      <label htmlFor="">Nota2</label>  
      <input
        type="text"
        value={nota2}
        onChange={(e) => setResultado(e.target.value)}
      />
      <button onClick={CalcularMedia}>Calcular Média</button>
      {}
    </div>
  );
}

export default Nota;