import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import theme from "./Theme";
import GlobalStyle from "./GlobalStyle";
import Guide from "./pages/Guide";
import Apply from "./pages/Apply";

function App() {
  const methods = useForm({
    mode: 'onBlur'
  });
  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path='/' element={<Guide />} />
            <Route 
              path='/apply' 
              element={<Apply />} 
            />
          </Routes>
        </Router>
      </FormProvider>
    </ThemeProvider>
    
  );
}

export default App;
