import React, { Component } from 'react';
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
