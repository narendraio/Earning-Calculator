import { useState, useEffect } from "react";
import { DAYS_OF_WEEK } from "../constants";
import {
    getDayOfWeek,
    getTimePeriod,
    findNearestWeek,
} from "../utils/dateUtils";
import { fetchEarningsData, fetchCompanyLogos } from "../services/api";

const useEarningsData = () => {
    const [earnings, setEarnings] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [logoMap, setLogoMap] = useState({});

    const organizeEarningsByDay = (data) => {
        const organized = DAYS_OF_WEEK.reduce((acc, day) => {
            acc[day] = { beforeOpen: [], afterClose: [] };
            return acc;
        }, {});

        if (!data || !Array.isArray(data.earnings)) {
            console.error("Invalid earnings data structure:", data);
            return organized;
        }

        const { weekStart, weekEnd } = findNearestWeek(data.earnings);
        const tickers = []; // Collect tickers for logo fetching

        data.earnings.forEach((earning) => {
            try {
                const earningDate = new Date(earning.date);
                if (earningDate >= weekStart && earningDate <= weekEnd) {
                    const dayOfWeek = getDayOfWeek(earning.date);

                    if (dayOfWeek && organized[dayOfWeek]) {
                        const period = getTimePeriod(earning.time);
                        organized[dayOfWeek][period].push({
                            name: earning.name,
                            ticker: earning.ticker,
                            time: earning.time,
                            importance: parseInt(earning.importance) || 0,
                            exchange: earning.exchange,
                        });
                        tickers.push(earning.ticker);
                    }
                }
            } catch (err) {
                console.error("Error processing earning entry:", err, earning);
            }
        });

        // Sort each day's earnings by importance
        DAYS_OF_WEEK.forEach((day) => {
            ["beforeOpen", "afterClose"].forEach((period) => {
                organized[day][period].sort(
                    (a, b) => b.importance - a.importance
                );
            });
        });

        return { organized, tickers };
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchEarningsData();
                const { organized, tickers } = organizeEarningsByDay(data);
                setEarnings(organized);
                console.log("here for fetch logo", tickers);
                try {
                    const logos = await fetchCompanyLogos(tickers);
                    console.log(logos);
                    setLogoMap(logos);
                } catch (logoErr) {
                    console.error("Error fetching logos:", logoErr);
                }

                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { earnings, loading, error, logoMap };
};

export default useEarningsData;
