import { PageHeader } from "@components/common/PageHeader";
import { Report } from "./Report";
import styled from "styled-components";

const data = [
  {
    reportId: 1,
    departuredAt: "2023-07-23T18:51:16.007759",
    arrivedAt: "2023-07-23T18:52:44.789957",
    mileage: "5.1",
    score: "62",
  },
  {
    reportId: 2,
    departuredAt: "2023-10-23T18:51:16.007759",
    arrivedAt: "2023-10-23T19:30:44.789957",
    mileage: "5.1",
    score: "71",
  },
  {
    reportId: 3,
    departuredAt: "2023-07-23T18:51:16.007759",
    arrivedAt: "2023-07-23T18:52:44.789957",
    mileage: "5.1",
    score: "62",
  },
  {
    reportId: 4,
    departuredAt: "2023-10-23T18:51:16.007759",
    arrivedAt: "2023-10-23T19:30:44.789957",
    mileage: "5.1",
    score: "71",
  },
  {
    reportId: 5,
    departuredAt: "2023-07-23T18:51:16.007759",
    arrivedAt: "2023-07-23T18:52:44.789957",
    mileage: "5.1",
    score: "62",
  },
  {
    reportId: 6,
    departuredAt: "2023-10-23T18:51:16.007759",
    arrivedAt: "2023-10-23T19:30:44.789957",
    mileage: "5.1",
    score: "71",
  },
];
export const Note = () => {
  return (
    <NoteContainer>
      <PageHeader name="주행 기록" />
      <Reports>
        {data.map((el) => {
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
  padding-top: 15px;
  padding-bottom: 100px;

  overflow-y: scroll;

  //hide scroll bar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
