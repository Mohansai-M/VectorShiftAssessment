// outputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { AbstractNode } from "./abstractNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    <AbstractNode
      id={id}
      label="Output"
      fields={[
        {
          label: "Name",
          type: "text",
          value: currName,
          onChange: (e) => setCurrName(e.target.value),
        },
        {
          label: "Type",
          type: "select",
          value: outputType,
          onChange: (e) => setOutputType(e.target.value),
          options: ["Text", "Image"],
        },
      ]}
      handles={[{ type: "target", position: Position.Left, id: "value" }]}
    />
  );
};
