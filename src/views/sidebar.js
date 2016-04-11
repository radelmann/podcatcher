import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';

import {LogoIcon, LiveIcon} from './icons';
import styles from '../styles/sidebar';

class Sidebar extends Component {

  render() {
    const queueSize = Array.isArray(this.props.queue) ? this.props.queue.length : 0; 
    const queueText = queueSize===0 ? 'Q' : 'Q ('+queueSize+')'; 

    const navSections = [
      ['', <LogoIcon classNames={styles.icon} />, ''],
      ['queue', '', <span className={styles.text}>{queueText}</span> ]
    ];

    return (
      <div className={styles.sidebarPane}>
        <ul className={styles.sidebarNav}>
          {
            navSections.map(([iconKey, Icon, text]) => {
              return (
                <li key={iconKey} className={classNames([styles.sidebarNavItem, styles[`navItem${iconKey}`]])}>
                  <Link to={`/${iconKey}`} activeClass="active">{Icon}{text}</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
};

function mapStateToProps ({queue}) {
  return { queue } || {}; 
}

export default connect(
  mapStateToProps,
  null
)(Sidebar);