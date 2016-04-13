import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as podcastActions from  '../action-creators/podcasts';
import styles from '../styles/search-bar';
import { SearchIcon } from './icons';

class SearchBar extends Component {
  componentWillUnmount() {
    console.log('search cleared');
    this.props.setSearchTerm("");   
  }

  setSearchTerm(e) {
    this.props.setSearchTerm(e.target.value);   
  }

  constructor(props) {
    super(props);
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  render() {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.searchFieldContainer}>
          <input placeholder="search by podcast title" className={styles.searchInput} type="text" onChange={ this.setSearchTerm }/>  
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
