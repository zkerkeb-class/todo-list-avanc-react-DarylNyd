import React from 'react';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.css';

function TodoList({ tasks, deleteTask, updateTask }) {
  if (tasks.length === 0) {
    return <p className={styles.noTasks}>No tasks available</p>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
