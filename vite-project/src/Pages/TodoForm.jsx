import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (task.trim()) {
      if (editingTask) {
        setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, text: task } : t));
        setEditingTask(null);
      } else {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      }
      setTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setTask(task.text);
    setEditingTask(task);
  };

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#8B5CF6", // Violet background
      }}
    >
      <div 
        style={{
          padding: "24px",
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "#2D3748", textAlign: "center" }}>TODO LIST</h1>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", width: "100%" }}>
          <input
            style={{
              flex: "1",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #D1D5DB",
            }}
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add or edit a task"
          />
          <button 
            onClick={addTask} 
            style={{
              padding: "8px 16px",
              backgroundColor: "#3B82F6", 
              color: "white", 
              borderRadius: "8px",
              border: "none",
            }}
          >
            {editingTask ? "Update" : "Add"}
          </button>
        </div>
        <ul style={{ width: "100%" }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", borderBottom: "1px solid #E5E7EB" }}>
              <span
                style={{
                  flex: "1",
                  cursor: "pointer",
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#9CA3AF' : 'black',
                }}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>
              <div style={{ display: "flex", gap: "8px" }}>
                <button 
                  onClick={() => editTask(task)} 
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#F59E0B",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                  }}
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteTask(task.id)} 
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#EF4444",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                  }}
                >
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
