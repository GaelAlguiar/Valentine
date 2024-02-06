import { useEffect, useState } from "react";
import "./App.css";
import fondo from "./assets/fondo.mp3";

const frases = [
  "No",
  "Estas segura?",
  "Segurisisima?",
  "No lo permitire",
  "Andale bibi",
  "Andale no seas asi",
  "Andale andale ",
  "Ya voy a llorar",
  "Yasta pa",
  "No opcion",
  "Te lo dije",
  "Ya picale",
  "Te voy a tratar bonito",
];

function App() {
  const [fondoAudio] = useState(new Audio(fondo));

  useEffect(() => {
    fondoAudio.loop = true;
    fondoAudio.play();
    return () => {
      fondoAudio.pause();
    };
  }, [fondoAudio]);

  const [noContador, setNoContador] = useState(0);
  const [siPresionado, setSiPresionado] = useState(false);
  const siBotonSize = noContador * 20 + 16;

  function noClick() {
    setNoContador(noContador + 1);
  }

  function obtenerNoBotonTexto() {
    return frases[Math.min(noContador, frases.length - 1)];
  }

  return (
    <div className="contenedor">
      {siPresionado ? (
        <>
          <img
            src="https://i.pinimg.com/originals/03/3e/28/033e28a8f86c4de270668d07057e0dab.gif"
            alt=" Ositos Besandose"
          />
          <div className="texto">Te pones linda, aun más... </div>
        </>
      ) : (
        <>
          <img
            src="https://i.pinimg.com/originals/df/d5/0f/dfd50f02e6ce091921e4dfb2e8f7dd2b.gif"
            alt="Ositos Corazones"
          />
          <div className="mensaje">
            Tendrias una cita el día 10 conmigo por San Valentín??
          </div>
          <div className="botones">
            <button
              className="siBoton"
              style={{ fontSize: siBotonSize }}
              onClick={() => setSiPresionado(true)}
            >
              Si
            </button>
            <button className="noBoton" onClick={noClick}>
              {obtenerNoBotonTexto()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
