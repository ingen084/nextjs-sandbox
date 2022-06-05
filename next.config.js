const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // @/でモジュールをロードできるようにする
    config.resolve.alias["@"] = path.resolve(path.join(__dirname, "src"));
    config.resolve.alias["./@"] = path.resolve(path.join(__dirname, "src"));
    return config;
  }
}

module.exports = nextConfig
