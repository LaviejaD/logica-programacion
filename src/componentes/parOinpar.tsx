import { useState } from 'react';
export function Par() {
  const [valor, setvalor] = useState(0);

  const [dispensar, setdispensar] = useState(0);
  const [xd,setxd] = useState(0)
  const Calcular = () => {
setxd(valor);
    if (valor % 2 === 0) {
      return setdispensar(1);
    }
    setdispensar(2);
  };
  const Mensaje = () => {
    if (dispensar === 1) {
      return <p>El numero "{xd}" es par.</p>;
    }
    if (dispensar === 2) {
      return <p>El numero "{xd}" no es par.</p>;
    }
    return null;
  };
  return (
    <div>
      <h2>Par o inpar</h2>
      <h3>
        <Mensaje />
      </h3>
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
  );
}
