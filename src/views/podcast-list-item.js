import React, { Component } from 'react';
import styles from '../styles/podcast-list-item';
import { Link } from 'react-router';

class PodcastListItem extends Component {
  render() {
    const {title, item: episodes, slug, image = [], ...data} = this.props;
    const imgSrc  = image[0] ? image[0].url : null;


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