import "./styles.css";

function Login() {
  return (
    <div>
    <ol>
      <li>Prenez une photo de vous avec la croix du Mont Bellevue allumée.</li>
      <li>
        Prenez une photo de chaque participant aux olympiades à leur insu.
        Chaque personne vaut 1pts. 1 photo par personne par équipe.
      </li>
      <li>Trouver une maison avec l'adresse civique 69 (No google maps)</li>
      <li>Trouver les balles de pétanques au chalet.</li>
      <li>Apporter une carotte déjà cuite au chalet.</li>
      <li>Vidéo de vous faisant un sport d’hiver au choix.</li>
      <li> Le shotgun d’une seltzer complète avec preuve qu’elle est vide.</li>
      <li>Glisser sur le ventre avec une crazy-carpet/soucoupe</li>
      <li>Un selfie à 3h34 du matin, avec preuve</li>
      <li>Une photo avec un employé d’un IGA</li>
      <li>Faire une pizza avec de l' ananas.</li>
      <li>Vidéo de vous qui Bench.</li>
      <li>Faire un bonhomme de neige</li>
      <li>A suivre.</li>
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
{D: "E" , Nom: "ST,Emy,KA"},
{D: "S1", Nom: "Yanny, Eli, Alexe,Raph"},
{D: "S2", Nom: "Emy, Mari, Alexe,"},
{D: "S3", Nom: ""},
{D: "S4", Nom: ""},
];

export default Login;
