import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';
import styles from '../styles/sidebar';

class Sidebar extends Component {

  render() {
    const queueSize = Array.isArray(this.props.queue) ? this.props.queue.length : 0; 
    const queueText = queueSize===0 ? 'Q' : 'Q ('+queueSize+')'; 

    const navSections = [
      ['', <span className={styles.text}>Home</span> ],
      ['queue', <span className={styles.text}>{queueText}</span> ]
    ];

    return (
      <div className={styles.sidebarPane}>
        <ul className={styles.sidebarNav}>
          {
            navSections.map(([key, text]) => {
              return (
                <li key={key} className={classNames([styles.sidebarNavItem, styles[`navItem${key}`]])}>
                  <Link to={`/${key}`} activeClass="active">{text}</Link>
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