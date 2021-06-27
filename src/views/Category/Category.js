import React from 'react';
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux';

import {useStyles} from './Category.style'

function Category (props) {

    const params = useParams()
    const classes = useStyles();

    return (
        <div>
            category
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
