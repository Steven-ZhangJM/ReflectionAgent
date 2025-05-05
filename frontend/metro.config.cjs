// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// 开启 ESM import.meta 支持
config.transformer.getTransformOptions = async () => ({
    transform: {
        experimentalImportSupport: true,  // ← 关键：允许 import.meta
        inlineRequires: true,
    },
});

module.exports = config;
