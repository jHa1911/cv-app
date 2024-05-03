import React from 'react';

const CollapsibleSection = ({ title, content: Content, isCollapsed, toggleCollapse }) => {
    return (
        <div className={`form-section ${isCollapsed ? 'collapsed' : ''}`}>
            <div>
                <h1>{title}</h1>
                <button className="collapse-button" onClick={toggleCollapse}>
                    {isCollapsed ? '▼' : '▲'}
                </button>
            </div>
            {isCollapsed && <Content />}
        </div>
    );
};

export default CollapsibleSection;