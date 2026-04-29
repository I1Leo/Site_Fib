const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		port: 8000,
		open: true,
		hot: true,
		historyApiFallback: true, // SPA маршруты
	},
	plugins: [new ReactRefreshWebpackPlugin()],
};
