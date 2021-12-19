import "./styles.css";
import Body from "./Components/Body";
import { ThemeContext } from "./Context/ThemeProvider";
import { useContext } from "react";

export default function App() {
  const [{ theme, themeData }] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(currentTheme);

  return (
    <div
      className="App"
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.background
      }}
    >
      <Body />
    </div>
  );
}
