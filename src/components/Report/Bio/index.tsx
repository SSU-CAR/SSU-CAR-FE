import * as styles from "./Bio.styles";
import { useEffect, useState } from "react";
import { BioType } from "src/types/report";
import { getDateString } from "@utils/datetime";

const data = {
  monthlyMileage: "20.2",
  totalMileage: "1206.456",
  latestDeparture: "2023-10-23T18:51:16.007759",
  latestArrival: "2023-10-23T19:30:44.789957",
};
export const Bio = () => {
  const [bio, setBio] = useState<BioType>();

  useEffect(() => {
    setBio(data);
  }, []);

  return (
    <styles.BioContainer>
      <styles.BioName>주행 이력</styles.BioName>
      <styles.DistanceContainer>
        <styles.DistanceName>이번 달 주행 거리</styles.DistanceName>
        <styles.DistanceValue>
          {Math.ceil(Number(bio?.monthlyMileage) * 10) / 10} km
        </styles.DistanceValue>
        <styles.DistanceName>총 주행 거리</styles.DistanceName>
        <styles.DistanceValue>
          {Math.ceil(Number(bio?.totalMileage) * 10) / 10} km
        </styles.DistanceValue>
      </styles.DistanceContainer>
      <styles.DistanceContainer>
        <styles.DistanceName>최근 주행</styles.DistanceName>
        <styles.DistanceValue>
          {getDateString(bio?.latestDeparture || String(new Date())) +
            " " +
            bio?.latestDeparture.slice(11, 16) +
            " - " +
            bio?.latestArrival.slice(11, 16)}
        </styles.DistanceValue>
      </styles.DistanceContainer>
    </styles.BioContainer>
  );
};
