import React, { Component } from 'react';
import classes from './Drawer.module.scss';

const links = ['link1', 'link2', 'link3'];

class Drawer extends Component {
  renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}>
        <a>{link}</a>
      </li>
    ));
  };

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <nav className={cls.join(' ')}>
        <ul>{this.renderLinks()}</ul>
      </nav>
    );
  }
}

export default Drawer;
