import React from 'react';
import { Cajero } from './componentes/Condicionalesimples.tsx';
import { Tabla } from './componentes/tabla.tsx';
import { Par } from './componentes/parOinpar.tsx';
import {NumeroSecreto} from "./componentes/numerosecreto.tsx"
export default function App() {
  const [menu, setmenut] = React.useState(4);
  console.log(menu);
  const Vistas = () => {
    switch (menu) {
      case 1:
        return <Cajero />;
      case 2:
        return <Tabla />;
      case 3:
        return <Par />;
      case 4:
        return <NumeroSecreto/>;
      default:
        return null;
    }
  };
  const Menu = () => {
    if (menu === 0) {
      return (
        <ul>
          <li>
            <button onClick={() => setmenut(1)}>Condicionales simples</button>
          </li>
          <li>
            <button onClick={() => setmenut(2)}>
              Tabla de multiplicar (Bucle for, salida formateada)
            </button>
          </li>
          <li>
            <button onClick={() => setmenut(3)}>Par o impar y ¿cuántos?</button>
          </li>
          <li>
            <button onClick={() => setmenut(4)}>
              Número secreto (Condicionales, operadores lógicos, bucle do-while
              o while)
            </button>
          </li>
        </ul>
      );
    }

    return null;
  };
  return (
    <div className='App'>
      <h1>Asignación: Taller Lógica de Programación</h1>
      {menu !== 0 ? (
        <button onClick={() => setmenut(0)}>Regresar al Inicio</button>
      ) : null}
      <div></div>
      {<Vistas />}
      {<Menu />}
    </div>
  );
}