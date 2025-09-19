// TextNode.js
import { useState } from "react";
import { AbstractNode } from "./abstractNode";
import { Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <AbstractNode
      id={id}
      label="Text"
      fields={[
        {
          label: "Text",
          type: "text",
          value: currText,
          onChange: (e) => setCurrText(e.target.value),
        },
      ]}
      handles={[{ type: "source", position: Position.Right, id: "output" }]}
    />
  );
};
