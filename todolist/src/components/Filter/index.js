import React from 'react';

const Filter = props => {
  return (
    <div className="Filter">
      <button
        onClick={() => {
          props.setFilter('all');
        }}
        className="Filter-button"
        disabled={props.currentFilter === 'all'}
      >
        All
      </button>
      <button
        onClick={() => {
          props.setFilter('completed');
        }}
        className="Filter-button"
        disabled={props.currentFilter === 'completed'}
      >
        Completed
      </button>
      <button
        onClick={() => {
          props.setFilter('active');
        }}
        className="Filter-button"
        disabled={props.currentFilter === 'active'}
      >
        Active
      </button>
    </div>
  );
};

export default Filter;
