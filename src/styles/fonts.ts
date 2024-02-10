import { css } from "styled-components";
import HyndaiHarmonyBold from "@assets/fonts/HyndaiHarmony_B.woff";
import HyndaiHarmonyMedium from "@assets/fonts/HyundaiHarmony_M.woff";
import HyndaiHarmonyLight from "@assets/fonts/HyundaiHarmony_L.woff";
import PretendardBold from "@assets/fonts/Pretendard-Bold.woff2";
import PretendardSemiBold from "@assets/fonts/Pretendard-SemiBold.woff2";
import PretendardMedium from "@assets/fonts/Pretendard-Medium.woff2";
import PretendardRegular from "@assets/fonts/Pretendard-Regular.woff2";
import PretendardLight from "@assets/fonts/Pretendard-Light.woff2";

export const fonts = css`
  @font-face {
    font-family: "HyndaiHarmony";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("현대하모니"), url(${HyndaiHarmonyBold}) format("woff");
  }

  @font-face {
    font-family: "HyndaiHarmony";
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: local("현대하모니"), url(${HyndaiHarmonyMedium}) format("woff");
  }

  @font-face {
    font-family: "HyndaiHarmony";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("현대하모니"), url(${HyndaiHarmonyLight}) format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardBold}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardSemiBold}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardMedium}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardRegular}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardLight}) format("woff2");
  }
`;
