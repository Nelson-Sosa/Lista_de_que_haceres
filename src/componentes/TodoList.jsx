import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import './App.css';
import './TodoItem.css';
function TodoList() {
  const [tareas, setTareas] = useState(() => {
    const guardarTareas = localStorage.getItem('tareas');
    return guardarTareas ? JSON.parse(guardarTareas) : [];
  });

  const [nuevaTarea, setNuevaTarea] = useState('');

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;
    const nuevaTareaObj = { id: Date.now(), texto: nuevaTarea, completado: false };
    setTareas([...tareas, nuevaTareaObj]);
    setNuevaTarea('');
  };

  const borrarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const toggleTarea = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
    ));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button className="btn-add" onClick={agregarTarea}>Agregar</button>
      <div>
        {tareas.map(tarea => (
          <TodoItem
            key={tarea.id}
            tarea={tarea}
            onToggle={toggleTarea}
            onDelete={borrarTarea}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
