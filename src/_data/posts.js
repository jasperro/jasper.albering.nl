const _ = require("lodash");

const defaults = {
    title: "Posts",
};

const nl = { goBack: "Ga terug" };

const en = { goBack: "Go back" };

module.exports = {
    nl: _.merge({}, defaults, nl),
    en: _.merge({}, defaults, en),
};
