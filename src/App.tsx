import { useState } from "react";
import "./App.css";
import getRandomColor from "./Colors";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";

function App() {
  const [color, setColor] = useState(getRandomColor())

  const updateColor = () => {
    setColor(getRandomColor())
  }

  return (
    <Container backgroundColor={color}>
      <Card fontColor={color} updateColor={updateColor}/>
    </Container>
  );
}

export default App;
