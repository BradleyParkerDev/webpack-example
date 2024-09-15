const path = require('path');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'resources/src/typescript/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "resources/src/css"),
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts','.jsx', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'resources/dist'),
        filename: 'bundle.js',
    },
}

