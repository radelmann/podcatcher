import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';

class Queue extends Component {
  renderItem(itemData) {
    return (
      <div>{itemData.title}</div>
    );
  }

  render() {
    console.log('queue loaded');
    return (
      <div>this is the queue content
        { this.props.queue.map(this.renderItem) }      
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { queue: state.queue }; 
}

const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue);
