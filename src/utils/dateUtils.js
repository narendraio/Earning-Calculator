import { DAYS_OF_WEEK } from "../constants";

export const getTimePeriod = (timeString) => {
    if (!timeString) return "beforeOpen";
    const hour = parseInt(timeString.split(":")[0]);
    return hour < 12 ? "beforeOpen" : "afterClose";
};

export const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 0 || day === 6 ? null : DAYS_OF_WEEK[day - 1];
};

export const findNearestWeek = (earningsData) => {
    const dates = earningsData.map((e) => new Date(e.date));
    const minDate = new Date(Math.min(...dates));
    const weekStart = new Date(minDate);
    weekStart.setHours(0, 0, 0, 0);

    const day = weekStart.getDay();
    if (day === 0) weekStart.setDate(weekStart.getDate() + 1);
    else if (day > 1) weekStart.setDate(weekStart.getDate() - (day - 1));

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 5);

    return { weekStart, weekEnd };
};
