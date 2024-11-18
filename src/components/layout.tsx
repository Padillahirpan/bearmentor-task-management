import { NavBar } from "./home/header";
import { ThemeProvider } from "./theme-provider";

type LayoutProps = {
  children: React.ReactNode;
};

export const LayoutBase = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div className="max-w-2xl mx-auto">
        <NavBar />
        {children}
      </div>
    </ThemeProvider>
  );
};
