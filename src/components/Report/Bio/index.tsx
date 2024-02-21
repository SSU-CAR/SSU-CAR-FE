import * as styles from "./Bio.styles";
import { useEffect, useState } from "react";
import { BioType } from "src/types/report";
import { getDateString } from "@utils/datetime";
import { reportBioAPI } from "@api/reportAPIS";

export const Bio = () => {
  const [bio, setBio] = useState<BioType>();

  useEffect(() => {
    const response = reportBioAPI();
    response.then((res) => {
      setBio(res);
    });
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
