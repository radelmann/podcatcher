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
      <li >{ep.title} - <a onClick={ () => this.props.removeEpisodeFromQueue(ep) }> remove episode</a>
      </li>
    );
  }

  render() {
    return (
      <div>
        <h3>Podcast Queue</h3>
        <ol>
          { this.props.queue.map(this.renderItem) }      
        </ol>
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