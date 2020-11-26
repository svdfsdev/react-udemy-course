import React, { Component } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
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
    const { isOpen, onClose } = this.props;

    if (!isOpen) {
      cls.push(classes.close);
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {isOpen && <Backdrop onClick={onClose} />}
      </React.Fragment>
    );
  }
}

export default Drawer;
