import { PageHeader } from "@components/common/PageHeader";
import { Report } from "./Report";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ReportHistoryType } from "src/types/report";
import { historyAPI } from "@api/historyAPIS";

export const Note = () => {
  const [data, setData] = useState<ReportHistoryType[]>();

  useEffect(() => {
    const response = historyAPI();
    response.then((res) => {
      setData(res);
    });
  }, []);

  return (
    <NoteContainer>
      <PageHeader name="주행 기록" />
      <Reports>
        {data?.map((el) => {
          return <Report key={el.reportId} data={el} />;
        })}
      </Reports>
    </NoteContainer>
  );
};

const NoteContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Reports = styled.div`
  height: 100%;
  padding-top: 75px;
  padding-bottom: 100px;

  overflow-y: scroll;

  //hide scroll bar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
