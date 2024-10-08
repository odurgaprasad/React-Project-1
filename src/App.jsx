import React from "react";
// import Header from "./components/Header/header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Example from "./components/TabButtons/Example";
import Header from "./components/Header/Header";
function App() {
  return (
    <main className="container">
      <Header />
      <CoreConcept />
      <Example />
    </main>
  );
}

export default App;
