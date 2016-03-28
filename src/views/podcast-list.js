import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Podcast from './podcast-list-item';
import styles from '../styles/podcast-list';
import * as podcastActions from  '../action-creators/podcasts';

export class PodcastList extends Component {
  render() {
    const { podcasts = [] } = this.props;
    const titles = Object.keys(podcasts);
    return (
      <ul className={styles.podcastList}>
        {
          titles.map(title => <Podcast key={title} {...podcasts[title]}  />)
        }
      </ul>
    );
  }
}

const mapStateToProps = ({podcasts}) => ({podcasts});
const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastList);
