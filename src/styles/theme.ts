import { DefaultTheme } from "styled-components";

const colors = {
  white: "#ffffff",
  blue900: "#0E1862",
  blue800: "#121F7A",
  blue700: "#1E2F93",
  blue600: "#2F46B7",
  blue500: "#4561DB",
  blue400: "#5F81FF",
  blue300: "#87A3FF",
  blue200: "#9FB7FF",
  blue100: "#BFD0FF",
  blue50: "#DFE8FF",
  gray9: "#24292F",
  gray8: "#32383F",
  gray7: "#424A53",
  gray6: "#57606A",
  gray5: "#6E7781",
  gray4: "#8C959F",
  gray3: "#AFB8C1",
  gray2: "#D0D7DE",
  gray1: "#EAEEF2",
  gray0: "#F6F8FA",
  red400: "#F42D2D",
  red300: "#F86D60",
  red200: "#FB9580",
  chart1: "#FFD762",
  chart2: "#64A2FF",
  chart3: "#564CFF",
  chart4: "#6CE4C0",
  chart5: "#F5C3AF",
  chart6: "#FA67F6",
  chart7: "#6767D9",
  chart8: "#FED263",
  chart9: "#EC609C",
  chart10: "#EF8482",
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
