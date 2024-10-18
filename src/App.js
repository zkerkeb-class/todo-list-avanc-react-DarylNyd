import React, { useMemo, useState } from 'react';
import useTasks from './Hooks/useTasks';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import styles from './styles/App.module.css';

const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  UNCOMPLETED: 'uncompleted',
  ONGOING: 'ongoing',
};

function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();
  const [filter, setFilter] = useState(FILTERS.ALL);

  const filteredTasks = useMemo(() => {
    if (filter === FILTERS.ALL) return tasks;
    return tasks.filter((task) => task.status === filter);
  }, [tasks, filter]);

  return (
    <div className={styles.app}>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
