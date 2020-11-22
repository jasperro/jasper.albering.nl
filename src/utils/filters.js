const dayjs = require("dayjs");

module.exports = {
    dateToFormat: function (date, format) {
        return dayjs(date).format(String(format));
    },

    dateToISO: function (date) {
        return dayjs(date).toISOString();
    },

    obfuscate: function (str) {
        const chars = [];
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(["&#", str[i].charCodeAt(), ";"].join(""));
        }
        return chars.join("");
    },
};
