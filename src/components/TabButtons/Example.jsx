import React, { useState } from "react";

import TabButton from "./TabButton";
import { EXAMPLES } from "../../data";
import "./TabButton.css";
function Example() {
  const [exampledata, setExample] = useState("");

  function handleExample(selected) {
    setExample(selected);
  }
  return (
    <section id="examples">
      <h2>Example</h2>
      <main>
        <TabButton
          isSelected={exampledata === "components"}
          onSelected={() => handleExample("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={exampledata === "jsx"}
          onSelected={() => handleExample("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={exampledata === "props"}
          onSelected={() => handleExample("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={exampledata === "state"}
          onSelected={() => handleExample("state")}
        >
          State
        </TabButton>
      </main>
      {!exampledata ? (
        <p>Click The Buttons</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[exampledata].title}</h3>
          <p>{EXAMPLES[exampledata].description}</p>
          <pre>
            <code>{EXAMPLES[exampledata].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}

export default Example;
