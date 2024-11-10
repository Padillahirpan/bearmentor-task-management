import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { NavBar } from "./components/home/header";
import { ListGoalByStatus } from "./components/home/list-goal-by-status";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <div>
          <NavBar />
          <ListGoalByStatus />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
