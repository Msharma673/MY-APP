import React from 'react'


const TabPane = ({ id, label, children, active }) => {

    return (
      <div
        className={`tab-pane fade ${active ? 'show active' : ''}`}
        id={`${id}-pane`}
        role="tabpanel"
        aria-labelledby={id}
        tabIndex={active ? '0' : '-1'}
      >
        <div>{active && children}</div>
      </div>
    );
  };
export default TabPane