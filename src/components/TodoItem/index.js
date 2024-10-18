import React from 'react';
import styles from './TodoItem.module.css';
import CompleteButton from '../CompleteButton';

function TodoItem({ task, deleteTask, updateTask }) {
  const handleCompleteClick = () => {
    // Toggle the completion status of the task
    const newStatus = task.status === 'completed' ? 'ongoing' : 'completed';
    updateTask(task.id, newStatus);
  };

  return (
    <li className={styles.task}>
      <div className={styles.cont}>
        <input
          type="checkbox"
          checked={task.status === 'completed'}
          onChange={handleCompleteClick}
          className={styles.check}
        />
        <span className={task.status === 'completed' ? styles.completed : ''}>
          {task.text}
        </span>
      </div>
      <div className={styles.buttons}>
        <CompleteButton
          isCompleted={task.status === 'completed'}
          onClick={handleCompleteClick}
        />

        <button
          onClick={() => deleteTask(task.id)}
          className={styles.deleteBtn}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
