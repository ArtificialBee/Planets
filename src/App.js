import React, { useState } from "react";

//Import own created components
import Navbar from "./components/Navbar/Navbar";
import Planets from "./components/Planets/Planets";
import People from "./components/People/People";

function App() {

  const [page, setPage] = useState('planets')

  return (
    <div >
      <h1 style={{ textAlign: "center" }}>Star Wars Info</h1>
      <Navbar setPage={setPage}></Navbar>
      {page === 'planets' ? <Planets /> : <People />}
    </div >
  );
}

export default App;
