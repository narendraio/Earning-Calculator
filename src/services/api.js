import { API_KEY } from "../constants";

export const fetchEarningsData = async () => {
    const response = await fetch(
        `https://api.benzinga.com/api/v2.1/calendar/earnings?token=${API_KEY}`,
        {
            headers: {
                accept: "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const fetchCompanyLogos = async (tickers) => {
    const uniqueTickers = [...new Set(tickers)]; // Remove duplicates
    const tickersString = uniqueTickers.join(",");

    try {
        const response = await fetch(
            `https://api.benzinga.com/api/v2/logos/search?token=${API_KEY}&search_keys=${tickersString}&search_keys_type=symbol&fields=mark_vector_light`,
            {
                headers: {
                    accept: "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const logoMap = {};

        // Check if data and data.data exist
        if (data && data.data && Array.isArray(data.data)) {
            data.data.forEach((item) => {
                if (
                    item.search_key &&
                    item.files &&
                    item.files.mark_vector_light
                ) {
                    logoMap[item.search_key] = item.files.mark_vector_light;
                }
            });
        }

        return logoMap;
    } catch (error) {
        console.error("Error fetching logos:", error);
        return {};
    }
};
