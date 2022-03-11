import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import TasksList from '../pure/tasksList'

const mapStateToProps = (state) => {
    return {
        tasks: state.taskState
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)