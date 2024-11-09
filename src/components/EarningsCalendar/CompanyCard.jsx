import React from 'react';
import './EarningsCalendar.css';

const CompanyCard = ({ company, logoUrl }) => {
    const handleCompanyClick = (ticker) => {
        window.open(
            `https://www.benzinga.com/quote/${ticker.toLowerCase()}`,
            "_blank"
        );
    };

    const handleLogoError = (e) => {
        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'flex';
    };

    return (
        <div
            className="company-card"
            onClick={() => handleCompanyClick(company.ticker)}
        >
            <div className="company-info">
                {logoUrl ? (
                    <>
                        <img
                            src={logoUrl}
                            alt={`${company.name} logo`}
                            className="company-logo"
                            onError={handleLogoError}
                        />
                        <div 
                            className="company-logo-placeholder" 
                            style={{ display: 'none' }}
                        >
                            {company.ticker}
                        </div>
                    </>
                ) : (
                    <div className="company-logo-placeholder">
                        {company.ticker}
                    </div>
                )}
                <div className="company-name">{company.name}</div>
                <div className="company-ticker">{company.ticker}</div>
            </div>
        </div>
    );
};

export default CompanyCard;