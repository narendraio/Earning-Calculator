import React from 'react';
import '../EarningsCalendar/EarningsCalendar.css';

const Loading = ({ error }) => {
    return (
        <div className={`loading-container ${error ? 'error' : ''}`}>
            {error ? `Error: ${error}` : "Loading earnings data..."}
        </div>
    );
};

export default Loading;