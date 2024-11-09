import React from 'react';
import { DAYS_OF_WEEK } from '../../constants';
import useEarningsData from '../../hooks/useEarningsData';
import Loading from '../ui/Loading';
import DayColumn from './DayColumn';
import './EarningsCalendar.css';

const EarningsCalendar = () => {
    const { earnings, loading, error, logoMap } = useEarningsData();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Loading error={error} />;
    }

    return (
        <div className="earnings-container">
            <div className="earnings-header">
                <div className="earnings-logo">
                    <span>E•W</span>
                    <span style={{ marginLeft: '8px' }}>EARNINGS WHISPERS</span>
                </div>
                <div className="earnings-title">
                    <h1>Most Anticipated Earnings Releases</h1>
                    for the week beginning {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
            </div>

            <div className="earnings-calendar">
                <div className="day-grid">
                    {DAYS_OF_WEEK.map((day) => (
                        <DayColumn
                            key={day}
                            day={day}
                            dayEarnings={earnings[day]}
                            logoMap={logoMap}
                        />
                    ))}
                </div>
            </div>

            <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '12px', color: '#666' }}>
                © 2024 Earnings Whispers
            </div>
        </div>
    );
};

export default EarningsCalendar;