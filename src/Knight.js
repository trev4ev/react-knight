import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DragSource} from 'react-dnd';

const knightSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {

    render() {
        const {connectDragSource, isDragging} = this.props;
        console.log(this.props);
        return connectDragSource(
            <span style = {{
                opacity: isDragging ? 0.5 : 1,
                fontWeight: 'bold',
                cursor: 'move',
                fontSize: '8vh'
            }}>
            ♘
            </span>
        );
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
