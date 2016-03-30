import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';

class Queue extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(ep) {
    return (
      <div onClick={ () => this.props.removeEpisodeFromQueue(ep) }>{ep.title}</div>
    );
  }

  render() {
    return (
      <div>
        { this.props.queue.map(this.renderItem) }      
      </div>
    );
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