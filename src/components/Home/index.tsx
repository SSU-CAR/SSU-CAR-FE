import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { drivingStartAPI } from "@api/drivingAPIS";
import { PageHeader } from "@components/common/PageHeader";
import { getDayName } from "@utils/datetime";
import { Scores } from "./Scores";

export const Home = () => {
  const navigate = useNavigate();

  const handleClickDriveBtn = () => {
    const apireturn = drivingStartAPI();
    apireturn.then((res) => {
      console.log(res);
      navigate("/driving");
    });
  };
  const date = new Date();

  return (
    <HomeContainer>
      <PageHeader>
        <SubHeader>김모비님, 안녕하세요!</SubHeader>
        <DateText>{`${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월 ${date.getDay()}일 (${getDayName(date)})`}</DateText>
      </PageHeader>
      <Contents>
        <Scores />
      </Contents>
      <DrvieButton onClick={handleClickDriveBtn}>운전하기</DrvieButton>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SubHeader = styled.div`
  width: 360px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray9};
`;

const DateText = styled.div`
  width: 360px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray6};
  margin-top: 5px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const DrvieButton = styled.button`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0);

  width: 360px;
  height: 45px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue50};

  font-family: "HyndaiHarmony";
  font-size: 15px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.blue500};

  &:hover {
    cursor: pointer;
  }
`;
