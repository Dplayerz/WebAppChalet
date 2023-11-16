import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NewType } from "./types/ScoreP";
import { AliceScore } from "./AliceImport";

function ScoreAlice() {
  const [scoreAl, setScoreAl] = useState<NewType[]>([]);
  useEffect(
    () =>
      onSnapshot(AliceScore, (snapshot: QuerySnapshot<DocumentData>) => {
        setScoreAl(
          snapshot.docs.map((doc) => {
            return {
              PTS: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );

  console.log(scoreAl);

  return (
    <div>
      {scoreAl.map((item) => (
        <div>{item.PTS}</div>
      ))}
    </div>
  );
}
export default ScoreAlice;
