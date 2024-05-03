import React from 'react';

const CollapsibleSection = ({ title, isCollapsed, toggleCollapse }) => {
    return (
        <div className={` ${isCollapsed ? 'collapsed' : ''}`}>
            <h1>{title}</h1>
            <button className="collapse-button" onClick={toggleCollapse}>
                {isCollapsed ? '▼' : '▲'}
            </button>
        </div>
    );
};

export default CollapsibleSection;