import React from "react";
import "./Container.css";

const Container = ({ center, children, scroll = true }) => {
  console.log(scroll)
  let classNames = ['Container'];
  if (center) {
    classNames.push('Container--center');
  }

  if (children) {
    classNames.push('Container--scroll');
  }

  console.log(classNames);
  return <div className={classNames.join(' ')}>{children}</div>;
};

export default Container;