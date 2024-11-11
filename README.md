# Earnings Calendar Widget

An embeddable earnings calendar widget that displays company earnings releases in an organized weekly view. The widget includes company logos, before/after market timing, and interactive features.

## Features

-   Weekly view of earnings releases
-   Before/After market timing display
-   Company logos integration
-   Interactive company cards with hover effects
-   Responsive design
-   Embeddable iframe version

## Prerequisites

Before you begin, ensure you have installed:

-   [Node.js](https://nodejs.org/) (version 14 or higher)
-   npm (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/narendraio/Earning-Calculator
cd earnings-calendar-widget
```

2. Install dependencies:

```bash
npm install
```

# Environment Variables Setup

## Quick Start

1. Create a `.env` file in the root directory of your project
2. Add your API key:

```
REACT_APP_API_KEY=your_benzinga_api_key_here
```

## Development

To start the development server:

```bash
# Build the widget
npm run buil

# To Install serve globally (if not already installed)
npm run serve
```

The application will be available at `http://localhost:3000`.

## Building the Widget

To build the widget for production:

```bash
npm run build:widget
```

This will create a `dist` folder containing:

-   `earnings-widget.js`
-   `earnings-widget.html`

## Embedding the Widget

To embed the widget in your website, add the following code:

```html
<!-- Basic Implementation -->
<iframe
    src="[your-domain]/earnings-widget.html"
    width="100%"
    height="800"
    frameborder="0"
    scrolling="no"
></iframe>

<!-- Responsive Implementation -->
<div
    style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden;"
>
    <iframe
        src="[your-domain]/earnings-widget.html"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        frameborder="0"
        scrolling="no"
    ></iframe>
</div>
```

## Configuration

The widget uses the Benzinga API for fetching earnings data and company logos. Update the API key in `src/constants/index.js`:

```javascript
export const API_KEY = "your-api-key";
```

## Project Structure

```
├── public/
│   └── earnings-widget.html
├── src/
│   ├── components/
│   │   ├── EarningsCalendar/
│   │   │   ├── index.jsx
│   │   │   ├── EarningsCalendar.jsx
│   │   │   ├── CompanyCard.jsx
│   │   │   ├── DayColumn.jsx
│   │   │   └── styles.js
│   │   └── ui/
│   │       └── Loading.jsx
│   ├── constants/
│   │   └── index.js
│   ├── utils/
│   │   └── dateUtils.js
│   ├── hooks/
│   │   └── useEarningsData.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── index.js
├── webpack.widget.config.js
└── package.json
```

## Available Scripts

-   `npm run build:widget` - Builds the widget for production
-   `npm run serve` - Serves the built widget locally
-   `npm start` - Starts the development server

## API Integration

The widget uses two main API endpoints:

1. Earnings Data:

```javascript
https://api.benzinga.com/api/v2.1/calendar/earnings
```

2. Company Logos:

```javascript
https://api.benzinga.com/api/v2/logos/search
```

## Browser Support

The widget supports all modern browsers:

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

-   React.js for the UI framework
-   Benzinga API for earnings data
-   [List any other libraries or resources you used]

## Support

For support, email ndsnaren@gmail.com or open an issue in the repository.
