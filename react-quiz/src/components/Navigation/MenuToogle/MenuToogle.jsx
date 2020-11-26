import React from 'react';
import classes from './MenuToogle.module.scss';

const MenuToogle = (props) => {
  const { onToogle, isOpen } = props;
  const cls = [classes.MenuToogle, 'fa'];

  if (isOpen) {
    cls.push('fa-times');
    cls.push(classes.open);
  } else {
    cls.push('fa-bars');
  }

  return <i className={cls.join(' ')} onClick={onToogle} />;
};

export default MenuToogle;
