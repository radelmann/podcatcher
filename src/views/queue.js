import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';
import Sortable from 'sortablejs';

class Queue extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.sortableGroupDecorator = this.sortableGroupDecorator.bind(this);
    this.sortEnd = this.sortEnd.bind(this);
  }
  
  sortEnd (evt) {
    this.props.moveQueueItem({ from:evt.oldIndex, to:evt.newIndex});
  }

  sortableGroupDecorator (componentBackingInstance) {
    // check if backing instance not null
    if (componentBackingInstance) {
      let options = {
        draggable: "li", // Specifies which items inside the element should be sortable
        group: "shared",
        onEnd: this.sortEnd
      };
      Sortable.create(componentBackingInstance, options);
    }
  }

  renderItem(ep, i) {
    return (
      <li key={i}>{ep.title} - <a onClick={ () => this.props.removeEpisodeFromQueue(ep) }> remove episode</a>
      </li>
    );
  }

  render() {
    if (Array.isArray(this.props.queue) && (this.props.queue.length>0)) { 
      return (
        <div>
          <h3>Podcast Queue (Drag items to reorder)</h3>
          <ol className="group-list" ref={this.sortableGroupDecorator}>
            { this.props.queue.map(this.renderItem) }      
          </ol>
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