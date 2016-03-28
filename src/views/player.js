import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as playerActions from '../action-creators/player';
import { bindActionCreators } from 'redux';
import styles from '../styles/player';


export class Player extends Component {
  render() {
    const {title, podcastTitle, src} = this.props;

    const audioEl = src ? <audio src={src} controls autoPlay /> : null;

    return (
      <div className={styles.playerContainer}>
        <div className={styles.player}>
          {podcastTitle} - {title}
          {audioEl}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({player}) => player;
const mapDispatchToProps = (dispatch) => bindActionCreators(playerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);


