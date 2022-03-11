import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { toggleTask } from '../../store/actions/actions'
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
            return tasks;
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: filterTasks(state.tasksState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskClick: (id) => {
            dispatch(toggleTask(id))
        }
    }
}

export const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList)