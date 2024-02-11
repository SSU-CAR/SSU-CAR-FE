import styled from "styled-components";
import home from "@assets/images/home.webp";
import home_bold from "@assets/images/home_bold.webp";
import note from "@assets/images/note.webp";
import note_bold from "@assets/images/note_bold.webp";
import report from "@assets/images/report.webp";
import report_bold from "@assets/images/report_bold.webp";
import badge from "@assets/images/badge.webp";
import badge_bold from "@assets/images/badge_bold.webp";
import etc from "@assets/images/etc.webp";
import etc_bold from "@assets/images/etc_bold.webp";
import { theme } from "@styles/theme";
import { useNavigate } from "react-router-dom";

interface NavButtonType {
  type: string;
  name: string;
}

export const NavButton = ({ type, name }: NavButtonType) => {
  let ButtonImg;

  const navigate = useNavigate();
  const handleClickNavButton = () => {
    if (name === "홈") navigate("/");
    else if (name === "기록") navigate("/note");
    else if (name === "리포트") navigate("/report");
    else if (name === "배지") navigate("/badge");
  };
  switch (type) {
    case "home":
      ButtonImg = <img src={home} alt="홈" />;
      break;
    case "homeB":
      ButtonImg = <img src={home_bold} alt="홈" />;
      break;
    case "note":
      ButtonImg = <img src={note} alt="주행기록" />;
      break;
    case "noteB":
      ButtonImg = <img src={note_bold} alt="주행기록" />;
      break;
    case "report":
      ButtonImg = <img src={report} alt="리포트" />;
      break;
    case "reportB":
      ButtonImg = <img src={report_bold} alt="리포트" />;
      break;
    case "badge":
      ButtonImg = <img src={badge} alt="배지" />;
      break;
    case "badgeB":
      ButtonImg = <img src={badge_bold} alt="배지" />;
      break;
    case "etc":
      ButtonImg = <img src={etc} alt="더보기" />;
      break;
    case "etcB":
      ButtonImg = <img src={etc_bold} alt="더보기" />;
      break;
  }
  return (
    <NavButtonElement onClick={handleClickNavButton}>
      {ButtonImg}
      <ButtonName>{name}</ButtonName>
    </NavButtonElement>
  );
};

const NavButtonElement = styled.button`
  border: none;
  background-color: transparent;
  img {
    width: 24px;
    height: 24px;
  }
`;

const ButtonName = styled.div`
  font-family: "HyndaiHarmony";
  font-weight: 300;
  font-size: 13px;
  color: ${theme.colors.gray9};

  margin-top: 4px;
`;
