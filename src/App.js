import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import GlobalStyle from "./GlobalStyle";
import Guide from "./pages/Guide";
import Apply from "./pages/Apply";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Guide />} />
          <Route path='/apply' element={<Apply />} />
        </Routes>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
