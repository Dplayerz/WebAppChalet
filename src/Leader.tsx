import "./styles.css";


import Pepper from "./assets/Random.jpg";
import Emy from "./assets/EmyCha2.jpg";
import Steve from "./assets/SteveCha.jpg";
import Alice from "./assets/AliceCha.jpg";
import Delayed from "./Delayed";
import Raph from "./assets/RaphCha.jpg";
import max from "./assets/MaxChalet.jpg";
import kath from "./assets/KathCha.jpg";
import cath from "./assets/CathCha.jpg";
import Eliane from "./assets/ElianeCha2.jpg";
import youri from "./assets/YouriCha.jpg";
import mari from "./assets/MariCha.jpg";
import Bug from "./assets/small rat.png";


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


function BugX(){
  return <img src={Bug}></img>;
}

const data = [
  { Nom: "Pepper", Photo: <Photo />, PTS: 3 },
  { Nom: "Alice", Photo: <AliceArr />, PTS: 4 },
  { Nom: "Maxime", Photo: <MaxArr />, PTS: 6 },
  { Nom: "Steve", Photo: <SteveArr />, PTS: 1 },
  { Nom: "Kath", Photo: <KathArr />, PTS: 1 },
  { Nom: "Cath", Photo: <CathArr />, PTS: 0 },
  { Nom: "Eliane", Photo: <ElianeArr />, PTS: 6 },
  { Nom: "Raph", Photo: <RaphArr />, PTS: 0 },
  { Nom: "Emy", Photo: <EmyArr />, PTS: 0 },
  { Nom: "Youri", Photo: <YouriArr />, PTS: 0 },
  { Nom: "Mari", Photo: <MariArr />, PTS: 0 },
  { Nom: "Yanni", Photo: <BugX />, PTS: 0 },
];

const Pep = data[0].PTS;
const Al = data[1].PTS;
const Max = data[2].PTS;
const Stev = data[3].PTS;
const Ka = data[4].PTS;
const Ca = data[5].PTS;
const Eli = data[6].PTS;
const Ra = data[7].PTS;
const Em = data[8].PTS;
const You = data[9].PTS;
const Mar = data[10].PTS;
const Yan = data[11].PTS;

export const team1 = Yan + Max + You + Eli + Al + Ca;
export const team2 = Pep + Stev + Ka + Ra + Em + Mar;

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
