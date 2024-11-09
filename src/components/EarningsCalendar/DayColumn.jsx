import React from 'react';
import CompanyCard from './CompanyCard';
import './EarningsCalendar.css';

const DayColumn = ({ day, dayEarnings, logoMap }) => {
    return (
        <div className="day-column">
            <div className="day-header">{day}</div>
            <div className="period-headers">
                <div>Before Open</div>
                <div>After Close</div>
            </div>
            <div className="company-section">
                {/* Before Open Companies */}
                <div className="period-column">
                    {dayEarnings?.beforeOpen.map((company, index) => (
                        <CompanyCard
                            key={`before-${company.ticker}-${index}`}
                            company={company}
                            logoUrl={logoMap[company.ticker]}
                        />
                    ))}
                </div>

                {/* After Close Companies */}
                <div className="period-column">
                    {dayEarnings?.afterClose.map((company, index) => (
                        <CompanyCard
                            key={`after-${company.ticker}-${index}`}
                            company={company}
                            logoUrl={logoMap[company.ticker]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DayColumn;