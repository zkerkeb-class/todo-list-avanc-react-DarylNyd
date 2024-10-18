import React from 'react';
import styles from './TodoFilter.module.css';

function TodoFilter({ filter, setFilter }) {
  return (
    <div className={styles.filter}>
      <button
        onClick={() => setFilter('all')}
        className={filter === 'all' ? styles.active : ''}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={filter === 'completed' ? styles.active : ''}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('ongoing')}
        className={filter === 'ongoing' ? styles.active : ''}
      >
        Ongoing
      </button>
    </div>
  );
}

export default TodoFilter;
