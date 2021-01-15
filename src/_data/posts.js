const _ = require("lodash");

const defaults = {
    title: "Posts",
};

const nl = {};

const en = {};

module.exports = {
    nl: _.merge({}, defaults, nl),
    en: _.merge({}, defaults, en),
};
