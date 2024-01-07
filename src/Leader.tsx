import "./styles.css";


import Pepper from "./assets/Random.jpg";
import Emy from "./assets/EmyCha2.jpg";
import Steve from "./assets/SteveCha.jpg";
import Alice from "./assets/AliceCha.jpg";
import Raph from "./assets/RaphCha.jpg";
import max from "./assets/MaxChalet.jpg";
import kath from "./assets/KathCha.jpg";
import Eliane from "./assets/ElianeCha2.jpg";
import youri from "./assets/YouriCha.jpg";
import Bug from "./assets/YanniChaV.jpg";
import alexe from "./assets/alexeCha.jpg";


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

function ElianeArr() {
  return <img src={Eliane}></img>;
}

function YouriArr() {
  return <img src={youri}></img>;
}


function BugX(){
  return <img src={Bug}></img>;
}
function AleArr() {
  return <img src={alexe}></img>;
}


const data = [
  { Nom: "Pepper", Photo: <Photo />, PTS: 9 },
  { Nom: "Alice", Photo: <AliceArr />, PTS: 5 },
  { Nom: "Maxime", Photo: <MaxArr />, PTS: 9 },
  { Nom: "Steve", Photo: <SteveArr />, PTS: 7 },
  { Nom: "Kath", Photo: <KathArr />, PTS: 7 },
  { Nom: "Eliane", Photo: <ElianeArr />, PTS: 10 },
  { Nom: "Raph", Photo: <RaphArr />, PTS: 7 },
  { Nom: "Emy", Photo: <EmyArr />, PTS: 9 },
  { Nom: "Youri", Photo: <YouriArr />, PTS: 2 },
  { Nom: "Yanni", Photo: <BugX />, PTS: 12 },
{ Nom: "Alexe", Photo: <AleArr />, PTS: 8 },
];

const Pep = data[0].PTS;
const Al = data[1].PTS;
const Max = data[2].PTS;
const Stev = data[3].PTS;
const Ka = data[4].PTS;
const Eli = data[5].PTS;
const Ra = data[6].PTS;
const Em = data[7].PTS;
const You = data[8].PTS;
const Yan = data[9].PTS;
const AleX = data[10].PTS; 

export const team1 = Yan + Max + You + Eli + Al;
export const team2 = Pep + Stev + Ka + Ra + Em + AleX;

data.sort((a, b) => {
  if (b.PTS < a.PTS) return -1;
  if (b.PTS > a.PTS) return 1;
  return 0;
});

function Leader() {
  return (
    <div className="App">
      <header>LEADERBOARD</header>
    
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
      <p>
        Questionnaire de participation: <a href="Questionnaire">ici</a>{" "}
      </p>
    </div>
  );
}

export default Leader;
