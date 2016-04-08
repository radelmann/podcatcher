import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QueueItem from './queue-list-item';
import * as podcastActions from  '../action-creators/podcasts';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const style = {
  width: 400
};

@DragDropContext(HTML5Backend)

class Queue extends Component {
  constructor(props) {
    super(props);

    this.moveItem = this.moveItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  moveItem(dragIndex, hoverIndex) {
    this.props.moveQueueItem({ from:dragIndex, to:hoverIndex});
  }

  renderItem(ep, i) {
    return (
      <QueueItem 
        key={ep.id}
        index={i}
        id={ep.id}
        moveItem={this.moveItem}  
        ep={ep}>
      </QueueItem>
    );
  }

  render() {
    if (Array.isArray(this.props.queue) && this.props.queue.length>0) { 
      return (
        <div>
          <h3>Podcast Queue (Drag items to reorder)</h3>
          <div style={style}>
            { this.props.queue.map(this.renderItem) }      
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Podcast Queue (Empty)</h3>
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return { queue: state.queue } || {}; 
}

const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue);