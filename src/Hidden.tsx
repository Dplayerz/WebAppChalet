import gif from "./assets/UGZq.gif";
import "./Pouf.css";

function Hidden() {
  return (
    <div>
    <h1>
      <img src={gif} className="Pouf"></img>
    </h1>
    <h2>
        Defi secret: Screenshot ce gif et enlever le url avant l'envoi dans le
        groupe. "Un URL c'est le nom du site dans la bar du haut"
      </h2>
    </div>
  );
}

export default Hidden;
