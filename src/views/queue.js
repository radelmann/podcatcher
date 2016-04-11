import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QueueItem from './queue-list-item';
import * as podcastActions from  '../action-creators/podcasts';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import styles from '../styles/queue';

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
        <div className={styles.queueListContainer}>
          <h2 className={styles.queueListHeader}>Podcast Queue (Drag items to reorder)</h2>
          <div>
            <table className={styles.queueList}>
              <tbody>
                { this.props.queue.map(this.renderItem) }      
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.queueListContainer}>
          <h2 className={styles.queueListHeader}>Podcast Queue (Empty)</h2>
        </div>
      );
    }
  }
}

function mapStateToProps ({queue}) {
  return { queue } || {}; 
}

const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue);