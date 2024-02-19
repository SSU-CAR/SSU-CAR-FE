import { Link } from "react-router-dom";
import styled from "styled-components";
import { EndReport } from "./EndReport/EndReport";

export const End = () => {
  return (
    <EndContainer>
      <EndReport />
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
