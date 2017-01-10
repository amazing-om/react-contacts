module.exports = {
    entry: './src/App.js',
    output: {
        path: 'dist',
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: '/node_modules',
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}