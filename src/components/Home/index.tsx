import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { drivingStartAPI } from "@api/drivingAPIS";

export const Home = () => {
  const navigate = useNavigate();

  const handleClickDriveBtn = () => {
    const apireturn = drivingStartAPI();
    apireturn.then((res) => {
      console.log(res);
      navigate("/driving");
    });
  };
  return (
    <HomeContainer>
      <DrvieButton onClick={handleClickDriveBtn}>운전하기</DrvieButton>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
