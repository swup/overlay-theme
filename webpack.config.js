const webpack = require('webpack');
const baseConfig = require('@swup/webpack-config');
const name = require('./package.json').name;
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');

const PascalCaseName = upperFirst(camelCase(name));

const loaders = [
	{
		test: /\.css$/,
		use: [
			'css-loader',
		]
	},
	{
		test: /\.styl$/,
		loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
	},
	{
		test: /\.scss$/,
		use: [
			"css-loader",
			"sass-loader"
		]
	}
];

const config = Object.assign({}, baseConfig, {
	entry: {
		[PascalCaseName]: './entry.js',
		[`${PascalCaseName}.min`]: './entry.js'
	},
	output: {
		path: __dirname + '/dist/',
		library: PascalCaseName,
		libraryTarget: 'umd',
		filename: '[name].js'
	},
	module: {
		rules: [
			...baseConfig.module.rules,
			...loaders
		],
	},
});

const configForNpm = Object.assign({}, baseConfig, {
	entry: {
		'index': './entry.js',
		'index.min': './entry.js'
	},
	output: {
		path: __dirname + '/lib/',
		library: PascalCaseName,
		libraryTarget: 'umd',
		filename: '[name].js'
	},
	module: {
		rules: [
			...baseConfig.module.rules,
			...loaders
		],
	},
});

module.exports = [config, configForNpm];
