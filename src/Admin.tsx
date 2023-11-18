<<<<<<< HEAD
import "./styles.css";
import "./App.css";
import { team1 } from "./Leader";
import { team2 } from "./Leader";

const data = [
  { Nom: "team1", PTS: team1 },
  { Nom: "team2", PTS: team2 },
];

data.sort((a, b) => {
  if (b.PTS < a.PTS) return -1;
  if (b.PTS > a.PTS) return 1;
  return 0;
});
=======
import "./App.css"

>>>>>>> 448d2729b36397671d640b2fc920f69d8ed46334

function Admin() {
  return (
    <div className="App">
      <header>LEADERBOARD</header>

      <table>
        <tr>
          <th>Nom</th>
          <th>PTS</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Nom}</td>
              <td>{val.PTS}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Admin;
