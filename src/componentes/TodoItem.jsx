import React from "react";
import './TodoItem.css';
function TodoItem({ tarea, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={tarea.completado}
        onChange={() => onToggle(tarea.id)}
      />
      <span style={{ textDecoration: tarea.completado ? 'line-through' : 'none' }}>
        {tarea.texto}
      </span>
      <button className="btn-delete" onClick={() => onDelete(tarea.id)}>Eliminar</button>
    </div>
  );
}

export default TodoItem;
