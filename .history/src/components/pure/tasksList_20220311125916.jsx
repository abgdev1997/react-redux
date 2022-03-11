import React from 'react';
import PropTypes from 'prop-types';
import Task from './task';

const TasksList = ({tasks, onTaskClick}) => {
    return (
        <div>
            <h1>Your Tasks</h1>
            <ul>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        {...task}
                        onClick={onTaskClick(task.id)}
                    />
                ))}
            </ul>
        </div>
    );
}

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired,
            }
        ).isRequired
    ).isRequired,

    onTaskClick: PropTypes.func.isRequired,
}

export default TasksList;
