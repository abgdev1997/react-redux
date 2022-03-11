import React from 'react';
import PropTypes from 'prop-types';

const Task = (onClick, task) => {
    return (
        <li onClick={onClick} style={
            {
                textDecoration: task.completed ? 'line-through' : 'none',
                textDecorationColor: task.completed ? 'green' : 'none',
                color: task.completed ? 'green' : 'white'
            }
        }>    
            {task.id} - {task.text}
        </li>
    );
}

Task.propTypes = {
    onClick: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}

export default Task;
