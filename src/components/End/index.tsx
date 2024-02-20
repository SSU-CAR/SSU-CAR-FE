import { Link } from "react-router-dom";
import styled from "styled-components";
import { EndReport } from "./EndReport/EndReport";
import { drivingEndReportAPI } from "@api/drivingAPIS";
import { useEffect, useState } from "react";
import { DrivingEndType } from "src/types/driving";
import { useParams } from "react-router-dom";

export const End = () => {
  const [data, setData] = useState<DrivingEndType>();

  const params = useParams();

  useEffect(() => {
    const reportId = params.reportId;
    if (reportId) {
      const response = drivingEndReportAPI(Number(reportId));
      response.then((res) => {
        setData(res);
      });
    }
  }, []);

  return (
    <EndContainer>
      <EndReport data={data} />
      <Link to="/">
        <EndButton>주행 종료</EndButton>
      </Link>
    </EndContainer>
  );
};

const EndContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

const EndButton = styled.button`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0);

  width: 360px;
  height: 45px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue400};

  font-family: "HyndaiHarmony";
  font-size: 15px;
  font-weight: 300;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
