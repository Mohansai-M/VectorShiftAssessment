import { Handle } from "reactflow";
import { motion } from "framer-motion";
import "./nodes.css"

export const AbstractNode = ({ id, label, fields = [], handles = [] }) => {
  return (
    <motion.div
      className="abstract-node"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <div className="abstract-node-label">{label}</div>
      <div className="abstract-node-fields">
                {fields.map((field, idx) => (
          <label key={idx} className="abstract-node-field">
            <span className="abstract-node-field-label">
              {field.label || field?.span}
            </span>
            {field.type === "select" ? (
              <select
                value={field.value}
                onChange={field.onChange}
                className="abstract-node-select"
              >
                {field.options.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "text" ? (
              <input
                type="text"
                value={field.value}
                onChange={field.onChange}
                className="abstract-node-input"
              />
            ) : null}
          </label>
        ))}
      </div>

      {handles.map((h, idx) => (
        <Handle
          key={idx}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          className="abstract-node-handle"
        />
      ))}
    </motion.div>
  );
};
