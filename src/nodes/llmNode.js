// llmNode.js
import { AbstractNode } from "./abstractNode";
import { Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  return (
    <AbstractNode
      id={id}
      label="LLM"
      fields={[
        {
          span: "This is a LLM",
        },
      ]}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: "system",
          style: { top: `${100 / 3}%` },
        },
        {
          type: "target",
          position: Position.Left,
          id: "prompt",
          style: { top: `${200 / 3}%` },
        },
        { type: "source", position: Position.Right, id: "response" },
      ]}
    />
  );
};
