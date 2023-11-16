import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { PepperScore } from "./Pepper";
import { NewType } from "./types/ScoreP";

const [scorePep, setScorePep] = useState<NewType[]>([]);
useEffect(
  () =>
    onSnapshot(PepperScore, (snapshot: QuerySnapshot<DocumentData>) => {
      setScorePep(
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

const number = scorePep.map((item) => item.PTS);

console.log("this is" + number);

export default number;
