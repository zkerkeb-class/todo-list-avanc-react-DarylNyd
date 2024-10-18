import React from 'react';
import { FaCheck } from 'react-icons/fa'; // For the green tick icon
import styles from './CompleteButton.module.css'; // CSS for button

function CompleteButton({ isCompleted, onClick }) {
  return (
    <button
      className={`${styles.button} ${isCompleted ? styles.completed : styles.notCompleted}`}
      onClick={onClick}
    >
      {isCompleted ? (
        <>
          Completed <FaCheck className={styles.checkIcon} />
        </>
      ) : (
        'Finish Task'
      )}
    </button>
  );
}

export default CompleteButton;
