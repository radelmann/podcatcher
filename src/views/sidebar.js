import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import {LogoIcon, SearchIcon, LiveIcon, ShowsIcon, BrowseIcon} from './icons';
import styles from '../styles/sidebar';

const navSections = [
  ['', <LogoIcon classNames={styles.icon} />, ''],
  ['playlist', <LiveIcon classNames={styles.icon} />, '']
];


const Sidebar = () => {
  const navComponent = navSections.map(([iconKey, Icon, text]) => {
    return (
      <li key={iconKey} className={classNames([styles.sidebarNavItem, styles[`navItem${iconKey}`]])}>
        <Link to={`/${iconKey}`} activeClass="active">{Icon}{text}</Link>
      </li>
    );
  });

  return (
    <div className={styles.sidebarPane}>
      <ul className={styles.sidebarNav}>
        {navComponent}
      </ul>
    </div>
  );
};


export default Sidebar;
