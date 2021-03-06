if (typeof module === "object" && typeof require === "function") {
    var moduleLoader = require("buster-module-loader");

    module.exports = {
        specification: require("./reporters/specification"),
        jsonProxy: require("./reporters/json-proxy"),
        quiet: require("./reporters/quiet"),
        xml: require("./reporters/xml"),
        tap: require("./reporters/tap"),
        dots: require("./reporters/dots"),
        html: require("./reporters/html"),
        teamcity: require("./reporters/teamcity"),

        load: function (reporter) {
            if (module.exports[reporter]) {
                return module.exports[reporter];
            }

            return moduleLoader.load(reporter);
        }
    };
} else {
    buster.reporters = buster.reporters || {};
    buster.reporters.load = function (reporter) {
        return buster.reporters[reporter];
    };
}