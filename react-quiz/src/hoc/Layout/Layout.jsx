import React, { Component } from 'react';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import MenuToogle from '../../components/Navigation/MenuToogle/MenuToogle';
import classes from './Layout.module.scss';

class Layout extends Component {
  state = {
    menu: false,
  };

  toogleMenuHandler = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer isOpen={this.state.menu} />
        <MenuToogle
          onToogle={this.toogleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
