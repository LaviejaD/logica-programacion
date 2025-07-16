import { useState } from 'react';
export function Tabla() {
  const [valor, setvalor] = useState(1);

  const [dispensar] = useState(1);
  const Mensaje = () => {
    if (dispensar === 1) {
      const filas = 1;
      const columnas = 10;

      return (
        <table>
          <tbody>
            {Array(filas)
              .fill(null)
              .map((_, i) => (
                <tr key={i}>
                  {Array(columnas)
                    .fill(null)
                    .map((_, j) => (
                      <td key={j}>
                        {valor}x{j} = {j * valor};
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      );
    }
  };
  return (
    <div>
      <h2>Tabla de multiplicar</h2>
      <h3></h3>
      <form onSubmit={e => e.preventDefault()}>
        <label>
          Tablas de multiplicar del 1 al 10 ingresa un numero:<span></span>
          <input
            type='number'
            value={valor}
            onChange={e => setvalor(Number(e.target.value))}
          />
        </label>
      </form>
      <Mensaje />
    </div>
  );
}
