import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { NavBar } from "./components/home/header";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <div>
          <NavBar />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
