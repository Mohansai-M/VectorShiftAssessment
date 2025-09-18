// AbstractNode.js
import { Handle } from "reactflow";

export const AbstractNode = ({ id, label, fields = [], handles = [] }) => {
  return (
    <div style={{ width: 200, border: "1px solid black", padding: 8 }}>
      <div>
        <strong>{label}</strong>
      </div>

      {fields.map((field, idx) => (
        <label key={idx} style={{ display: "block", marginTop: 4 }}>
          {field.label ? field.label : field?.span}:
          {field.type === "select" ? (
            <select value={field.value} onChange={field.onChange}>
              {field.options.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
              field.type === "text" ? 
              (<input
              type={field?.type}
              value={field?.value}
              onChange={field?.onChange}
              />) : <></>
          )}
        </label>
      ))}

      {handles.map((h, idx) => (
        <Handle
          key={idx}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={h.style}
        />
      ))}
    </div>
  );
};
