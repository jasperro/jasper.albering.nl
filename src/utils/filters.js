const dayjs = require("dayjs");

module.exports = {
    date: function (date, format, locale) {
        locale = locale ? locale : "en";
        dayjs.locale(locale);
        return dayjs(date).format(format);
    },

    dateToISO: function (date) {
        return dayjs(date).toISOString();
    },
};
