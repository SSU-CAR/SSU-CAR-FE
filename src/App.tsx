import { GlobalStyle } from "@styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/Home";
import { NotePage } from "@pages/Note";
import { ReportPage } from "@pages/Report";
import { BadgePage } from "@pages/Badge";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note" element={<NotePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/badge" element={<BadgePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
