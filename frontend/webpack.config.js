// webpack.config.js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    config.experiments = {
        ...(config.experiments || {}),
        importMeta: true  // ✅ 启用 import.meta 支持
    };
    return config;
};
