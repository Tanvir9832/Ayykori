import { useState } from "react";
import Tile from "./components/Tile";
import './App.css'

function App() {
  const [stringToShow, setStringToShow] = useState<string>("");

  const data = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className="container">
      <div className="show">
        {
          stringToShow
        }
      </div>
      <div className="tilesGrid">
        {
          data?.map((letter, ind) => {
            return (
              <Tile key={ind} letter={letter} setStringToShow={setStringToShow} />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
