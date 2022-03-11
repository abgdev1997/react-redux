import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import TasksList from '../pure/tasksList'

const filterTasks = (tasks, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return tasks;
        
        case 'SHOW_ACTIVE':
            return tasks.filter((task => !task.completed))
        
        case 'SHOW_COMPLETED':
            return tasks.filter(task => task.completed)    
        default:
            break;
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasksState
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)