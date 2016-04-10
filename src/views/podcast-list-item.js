import React, { Component } from 'react';
import styles from '../styles/podcast-list-item';
import { Link } from 'react-router';

class PodcastListItem extends Component {
  render() {
    const {title, item: episodes, slug, ...data} = this.props;
    const imgSrc  = this.props['itunes:image'][0].$.href ? this.props['itunes:image'][0].$.href : null;


    return (
      <li className={styles.podcastListItem} >
        <Link className={styles.itemLink} to={`/${slug}`} data-title={title}>
          <img src={imgSrc} className={styles.itemImg} />
        </Link>
      </li>
    );
  }
}

export default PodcastListItem;