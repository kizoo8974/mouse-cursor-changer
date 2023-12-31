import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

type Cursor = "cursor0" | "cursor1" | "cursor2" | "cursor3";

const cursors:Cursor[] = ["cursor0", "cursor1", "cursor2", "cursor3"]

function App() {
    const [selectedCursor, setSelectedCursor] = useState<Cursor>("cursor0");
    const [cursorPosition, setCursorPosition] = useState([0,0]);

    useEffect(()=> {
      const event = ({clientX, clientY}: MouseEvent) => {

        const pos = [clientX, clientY]

        switch(selectedCursor){
          case "cursor0":
            pos[0] -= 15
            break;
            case "cursor1":
              pos[0] -= 15
            break;
            case "cursor2":
              pos[0] -= 15
            break;
            case "cursor3":
              pos[0] -= 15
            break;
        }

        setCursorPosition(pos)
        console.log(clientX, clientY)
      }

      window.addEventListener("mousemove", event);

      return () => window.removeEventListener("mousemove", event)
    }, [selectedCursor])




  return (
    <>
    <img
        
        style={{
          pointerEvents:"none",
          
          position: "fixed",
          left: cursorPosition[0],
          top: cursorPosition[1],
          width: "100px"
        }} 
        src={`/images/${selectedCursor}.png`}/>
      <div style={{
        fontSize:"24px"
      }}>
        Press button and change mouse cursor.
      </div>
      <div style={{
        marginTop:"16px",
        display: "flex",
        gap:"20px",
        flexWrap:"wrap"

      }}>
        hello
        {/*button list*/}
      {
        cursors.map(cursor => <Button onClick={() =>
          setSelectedCursor(cursor)} 
        selected={selectedCursor === cursor} name={cursor} key={cursor}/>)
      
      }
      </div>
    </>
  );
}

export default App;
