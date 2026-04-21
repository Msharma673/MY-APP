import React from 'react'
import './TabItem.css'
const TabItem = ({ id, label, active, onTabChange }) => {
    return (
        <li className="nav-item" role="presentation">
            <button
                className={`tab-link ${active ? 'active' : ''}`}
                id={id}
                data-bs-toggle="tab"
                data-bs-target={`#${id}-pane`}
                type="button"
                role="tab"
                aria-controls={`${id}-pane`}
                aria-selected={active ? 'true' : 'false'}
                onClick={() => onTabChange(id)}
            >
                {label}
            </button>
        </li>
    );
};

export default TabItem