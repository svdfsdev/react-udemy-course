import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Drawer.module.scss';

const links = [
  { to: '/', label: 'Tests  list', exact: true },
  { to: '/auth', label: 'Authorization', exact: false },
  { to: '/quiz-creator', label: 'Create test', exact: false },
];

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}>
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          onClick={this.clickHandler}
        >
          {link.label}
        </NavLink>
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
