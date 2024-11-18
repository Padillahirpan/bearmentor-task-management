import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { NavBar } from "./components/home/header";
import { ListGoalByStatus } from "./components/home/list-goal-by-status";
import { DetailGoal } from "./components/detail/detail-goal";
import { getGoalsData } from "./cons/dummydata";
import { AddGoal } from "./pages/create-goal";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <div>
          <NavBar />
          {/* <ListGoalByStatus /> */}
          {/* <DetailGoal goalData={getGoalsData()[0]} /> */}
          <AddGoal />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
