const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'resources/src/typescript/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true, // Speeds up builds without type checking
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "resources/src/css"),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'resources/dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'resources/dist'),
        },
        compress: true,
        port: 3000,
        hot: true,
        watchFiles: ['resources/**/*'], // Watch all files in the resources directory
    },
};
