import { useState } from 'react';
export function Cajero() {
  const [valor, setvalor] = useState(0);

  const [dispensar, setdispensar] = useState(0);
  const Calcular = () => {
    if (valor % 10 === 0 && valor > 0) {
      return setdispensar(1);
    }
    setdispensar(2);
  };
  const Mensaje = () => {
    if (dispensar === 1) {
      return 'Monto válido. Se puede dispensar.';
    }
    if (dispensar === 2) {
      return 'Monto inválido. No se puede dispensar con los billetes disponibles.';
    }
    return null;
  };
  return (
    <div>
      <h2>Cajero</h2>
      <h3>
        <Mensaje />
      </h3>
      <form onSubmit={e => e.preventDefault()}>
        <label>
          Monto a retirar: <span></span>
          <input
            type='number'
            value={valor}
            onChange={e => setvalor(Number(e.target.value))}
            min='0'
            max='5000'
          />
        </label>

        <button type='submit' onClick={Calcular}>
          Retirar
        </button>
      </form>
    </div>
  );
}
