import { theme } from "@styles/theme";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { NavButton } from "./NavButton";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <NavbarContainer>
      {pathname === "/note" ? (
        <NavButton type="noteB" name="기록" />
      ) : (
        <NavButton type="note" name="기록" />
      )}
      {pathname === "/report" ? (
        <NavButton type="reportB" name="리포트" />
      ) : (
        <NavButton type="report" name="리포트" />
      )}
      {pathname === "/" ? (
        <NavButton type="homeB" name="홈" />
      ) : (
        <NavButton type="home" name="홈" />
      )}
      {pathname === "/badge" ? (
        <NavButton type="badgeB" name="배지" />
      ) : (
        <NavButton type="badge" name="배지" />
      )}
      <NavButton type="etc" name="더보기" />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 72px;
  background-color: white;
  border-top: 1px solid ${theme.colors.gray4};

  display: flex;
  justify-content: space-around;
`;
