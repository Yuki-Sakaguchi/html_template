/**
 * Webpackの設定ファイル
 */

// 以下は動的に変更したいので、gulp側で設定する
// entry: [{名前: ファイルパス}]
// output.path: [書き出し先のファイルパス]
// mode: ['production' or 'development']
// devtool: ['inline-source-map'（インラインにソースマップを表示する）]

module.exports = {
    output: {
        filename: '[name].js',
    },
    module : {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    }
};