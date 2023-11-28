import { useState } from "react";
import "./App.css";
import gif2 from "./assets/69gif.gif";

function Question() {
  var [val, setVal] = useState("Hello");

  const change = (event) => {
    setVal(event.target.value);
  };

  return (
    <div className="Quest">
      <h1>PAGE SECRETE</h1>
      <p>
        Pour avoir les points, il faut ecrire votre appreciation/10 du site que
        j'ai fait et l'ecrire ici bas.
      </p>
      <p>
        Lorsque la bonne reponse sera ecrite, un gif apparaitra. Vous Pouvez
        screenshot et l'envoyer dans le groupe sans la reponse!
      </p>
      <p></p>
      <input onChange={change} value={val} />
      {val === "69" ? (
        <h2>
          <img src={gif2} className="Pouf"></img>
        </h2>
      ) : (
        <h2>Pepper Games 2024</h2>
      )}
      {val === "69" ? (
        <p>S'assurer de cacher l'ecriture dans le GIF aussi, MERCI</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Question;
