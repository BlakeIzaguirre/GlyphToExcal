import React from "react";
import Mermaid from "react-mermaid";

function DisplayComponent() {
  const diagramCode = "graph TD; A-->B; A-->C; B-->D; C-->D;"; // replace with your actual diagram code

  return (
    <div>
      <Mermaid chart={diagramCode} />
    </div>
  );
}

export default DisplayComponent;
