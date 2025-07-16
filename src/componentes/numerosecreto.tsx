import { useState } from 'react';
export function NumeroSecreto() {
    
const [secreto,setsecreto] = useState(Math.floor(Math.random() * 100))

console.log("el numero secreto es ",secreto)
const [otra, setotra] = useState(false);
  const [valor, setvalor] = useState(0);
  const  [intentos, setintento] = useState(5);
  const [dispensar, setdispensar] = useState(-1);

const reset = ()=>{ setsecreto(Math.floor(Math.random() * 100));
    setdispensar(-1);
    setotra(false);
    setintento(5)
}
const Calcular = () => {

   
 
    if (intentos-1 >=1 ){

 setintento((e)=>e-1)    
setdispensar(valor)
    }
if(dispensar === secreto){ 
    setotra(true)
setdispensar(-2)

}
    if (1===intentos ){
        console.log(1>intentos, " intentos")
setotra(true)
setdispensar(-2)
    }
   
  };
  const Mensaje = () => {
    if (dispensar ===-1){
return null;
    }
    if (dispensar ===-2){
return <p>Te quedaste sin intentos,¿ quieres volver a jugar?.</p>;
    }
    if (dispensar > secreto) {
      return <p>El numero secreto es menor, te quedan intentos {intentos}.</p>;
    }
    if (dispensar < secreto) {
      return <p>El numero secreto es mayor, te quedan intentos {intentos}</p>;
    }
    if ( dispensar === secreto){
        setotra(true)
        return <p>"¡Correcto! ¡Adivinaste el número!"</p>
    }
    
  };
  return (
    <div>
      <h2>Numero Secreto</h2>
      <h3>
        <Mensaje />
      </h3>
      {otra?<button onClick={reset}>¿Jugar otra vez?</button>:null}
      <form onSubmit={e => e.preventDefault()}>
        <label>
          Ingresa un numero: <span></span>
          <input
            type='number'
            value={valor}
            onChange={e => setvalor(Number(e.target.value))}
          />
        </label>

        <button type='submit' onClick={Calcular}>
          Calcular
        </button>
      </form>
    </div>
  );}