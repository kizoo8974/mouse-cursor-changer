import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

type Cursor = "cursor0" | "cursor1" | "cursor2" | "cursor3";

const cursors:Cursor[] = ["cursor0", "cursor1", "cursor2", "cursor3"]

function App() {
  const [selectedCursor, setSelectedCursor] = useState<Cursor>("cursor0");


  return (
    <>
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
        cursors.map(cursor => <Button onClick={()=>setSelectedCursor(cursor)} 
        selected={selectedCursor === cursor} name={cursor} key={cursor}/>)
      
      }
      </div>
    </>
  );
}

export default App;
