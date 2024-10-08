import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../../data"; // Adjust the path as needed

function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((Concept, index) => (
          <CoreConcepts key={Concept.title + index} {...Concept} />
        ))}
      </ul>
    </section>
  );
}

// Only one `export default` allowed
export default CoreConcept;
