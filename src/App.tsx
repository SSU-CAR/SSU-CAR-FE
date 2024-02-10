import { GlobalStyle } from "@styles/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
