import "./styles.css";

function Login() {
  return (
    <div>
    <ol>
      <li>Photographier un bambi</li>
      <li>Trouver les balles de pétanques </li>
      <li>Photographier un dindon </li>
      <li>Trouver la vierge marie</li>
      <li>Apporter une carotte déjà cuite au chalet.</li>
      <li>selfie avec quelqu'un qui dort</li>
      <li>Trouver une golden can</li>
      <li>Glisser sur le ventre avec une crazy-carpet/soucoupe</li>
      <li>Boire dans le baril d'or</li>
    </ol> 
          
<table>
        <tr>
          <th>Defi</th>
          <th>Complete</th>
        </tr>
        {defi.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.D}</td>
              <td>{val.Nom}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

const defi = [
  { D: "1", Nom: "AL, XP, Eli, YA, Emy,Alexe, "},
  { D: "2", Nom: "MAX=6, Emy=3, Ya=4,  XP=2, KA=1, AL=2, ELi=3, Ale=3 raph=1"},
  { D: "3", Nom: "Eli, Alexe"},
  { D: "4", Nom: "" },
  { D: "5", Nom: "" },
  { D: "6", Nom: "" },
  { D: "7", Nom: "" },
  { D: "8", Nom: "ST, Max,Emy" },
  { D: "9", Nom: "" },
  { D: "10", Nom: "Emy"},
  { D: "11", Nom: "AL,XP, YA" },
  { D: "12", Nom: "AL, XP, YA" },
  { D: "13", Nom: "YA,Eli" },
{D: "E" , Nom: "ST,Emy,KA, Al, Eli"},
{D: "S1", Nom: "Yanny, Eli, Alexe,Raph"},
{D: "S2", Nom: "Emy, Mari, Alexe,"},
{D: "S3", Nom: ""},
{D: "S4", Nom: ""},
];

export default Login;
