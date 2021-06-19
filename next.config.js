const withPlugins = require("next-compose-plugins");

const config = {
    images: {
        domains: [],
    },
    future: {
        webpack5: true,
    },
};

module.exports = withPlugins([], config);
