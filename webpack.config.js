'use strict';

const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: path.join(__dirname, '/src'),

    entry: {
        'app': './js/app.js'
    },

    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: './'
    },

    externals: {
        'jquery': '$',
        'lodash': '_',
        'jquery-ui': '{}',
        'handlebars/runtime': 'Handlebars'
    },

    watch: NODE_ENV === 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV === 'development' ? 'source-map' : null,

    resolve: {
        alias: {
            helpers: path.resolve('./src/js/helpers'),
            components: path.resolve('./src/js/components'),
            constants: path.resolve('./src/js/constants/constants.js')
        }
    },

    plugins: require('./webpack/plugins'),

    module: {
        loaders: require('./webpack/loaders'),
        preLoaders: require('./webpack/preloaders')
    },

    postcss: require('./webpack/postcss'),

    eslint: {
        configFile: path.join(__dirname, '/webpack/eslint/.eslintrc')
    },

    sasslint: {
        configFile: path.join(__dirname, '/webpack/sasslint/.scss-lint.yml')
    }
};