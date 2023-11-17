import "./styles.css";
import Emy from "./assets/EmyCha2.jpg";
import Steve from "./assets/SteveCha.jpg";
import Alice from "./assets/AliceCha.jpg";
//import Admin from "./Admin";
import Delayed from "./Delayed";
import Raph from "./assets/RaphCha.jpg";
import max from "./assets/MaxChalet.jpg";
import kath from "./assets/KathCha.jpg";
import cath from "./assets/CathCha.jpg";
import Eliane from "./assets/ElianeCha2.jpg";
import yanni from "./assets/YanniChaV.jpg";
import youri from "./assets/YouriCha.jpg";
import mari from "./assets/MariCha.jpg";
import Pepper from "./assets/Pepper.jpg";

function Photo() {
  return <img src={Pepper}></img>;
}
function EmyArr() {
  return <img src={Emy}></img>;
}
function SteveArr() {
  return <img src={Steve}></img>;
}
function AliceArr() {
  return <img src={Alice}></img>;
}
function RaphArr() {
  return <img src={Raph}></img>;
}
function MaxArr() {
  return <img src={max}></img>;
}
function KathArr() {
  return <img src={kath}></img>;
}
function CathArr() {
  return <img src={cath}></img>;
}
function ElianeArr() {
  return <img src={Eliane}></img>;
}

function YouriArr() {
  return <img src={youri}></img>;
}

function MariArr() {
  return <img src={mari}></img>;
}
function YanniBug() {
  return <img src={yanni}></img>;
}

const data = [
  { Nom: "Pepper", Photo: <Photo />, PTS: 3 },
  { Nom: "Alice", Photo: <AliceArr />, PTS: 3 },
  { Nom: "Maxime", Photo: <MaxArr />, PTS: 6 },
  { Nom: "Steve", Photo: <SteveArr />, PTS: 1 },
  { Nom: "Kath", Photo: <KathArr />, PTS: 1 },
  { Nom: "Cath", Photo: <CathArr />, PTS: 0 },
  { Nom: "Eliane", Photo: <ElianeArr />, PTS: 0 },
  { Nom: "Raph", Photo: <RaphArr />, PTS: 0 },
  { Nom: "Emy", Photo: <EmyArr />, PTS: 0 },
  { Nom: "Youri", Photo: <YouriArr />, PTS: 0 },
  { Nom: "Mari", Photo: <MariArr />, PTS: 0 },
  { Nom: "Yanni", Photo: <YanniBug />, PTS: 0 },
  { Nom: "Mede", Photo: 0, PTS: 0 },
];

data.sort((a, b) => {
  if (b.PTS < a.PTS) return -1;
  if (b.PTS > a.PTS) return 1;
  return 0;
});

function Leader() {
  return (
    <div className="App">
      <header>LEADERBOARD</header>
      <Delayed>
        <table>
          <tr>
            <th>Nom</th>
            <th>Photo</th>
            <th>PTS</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Nom}</td>
                <td>{val.Photo}</td>
                <td>{val.PTS}</td>
              </tr>
            );
          })}
        </table>
      </Delayed>
    </div>
  );
}

export default Leader;
