// 共通プラグイン
const { src, dest, series, parallel, watch } = require('gulp');
const glob = require('glob');
const plumber = require('gulp-plumber');

// 開発モード
const gulpMode = require('gulp-mode')({
    modes: ['production', 'development'],
    default: 'development',
    verbose: false,
});

// パス
const path = {
    src: `${__dirname}/src`,
    public: `${__dirname}/public`,
};

/**
 * plumberでのエラーハンドリング
 */
function errorPlumber (e) {
    console.log(e.messageFormatted);
    this.emit('end');
}

/**
 * pugをコンパイル
 */
function pug() {
    const pug = require('gulp-pug');
    return src(`${path.src}/pug/pages/**/*.pug`)
        .pipe(plumber({ errorHandler: errorPlumber }))
        .pipe(pug({
            pretty: '    ', // コンパイル時のインデントを4スペースに変更
        }))
        .pipe(dest(path.public));
}

/**
 * scssをコンパイル
 */
function scss() {
    const sass = require('gulp-sass');
    const postcss = require('gulp-postcss');
    const cssmini = require('gulp-minify-css');
    const sourcemaps = require('gulp-sourcemaps');
    const supportBrowser = '> 0.5% in JP';
    const postcssPlugins = [
        require('autoprefixer')(supportBrowser), // ベンダープレフィックスの付与
        require('postcss-sorting'), // プロパティの順番をソート
    ];

    return src(`${path.src}/scss/**/*.scss`)
        .pipe(plumber({ errorHandler: errorPlumber }))
        .pipe(gulpMode.development(sourcemaps.init()))
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulpMode.development(sourcemaps.write({ includeContent: false })))
        .pipe(gulpMode.development(sourcemaps.init({ loadMaps: true })))
        .pipe(postcss(postcssPlugins))
        .pipe(gulpMode.production(cssmini({ advanced: false })))
        .pipe(gulpMode.development(sourcemaps.write()))
        .pipe(dest(`${path.public}/css`));
}

/**
 * webpackでTypeScriptをコンパイルする
 * 設定はwebpack.config.jsに書いてあるのでそっちを参照
 */
function webpack() {
    const webpackStream = require('webpack-stream');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');

    // コンパイル対象を複数にしたいのでファイルを正規表現で取得
    // アンダーバー(_)始まりではない、tsファイルは全て対象
    const entries = {};
    glob.sync(`${path.src}/ts{!(_)*.ts,/**/!(_)*.ts}`).map(file => {
        const fileName = file.replace(`${path.src}/ts/`, '').replace('.ts', '');
        entries[fileName] = file;
    });

    // 動的に値を設定
    webpackConfig.entry = entries;
    webpackConfig.output.path = `${path.public}/js`;
    webpackConfig.mode = gulpMode.production() ? 'production' : 'development';
    if (gulpMode.development()) webpackConfig.devtool = 'inline-source-map';

    return webpackStream(webpackConfig, webpack).on('error', function (e) {
            this.emit('end');
        })
        .pipe(dest(`${path.public}/js`));
}

/**
 * JavaScriptファイルをまとめてミニファイする
 * 処理したファイルは`bundle.min.js`という名前で書き出す
 */
function jsBundle() {
    const concat = require('gulp-concat');
    const uglify = require('gulp-uglify');

    return src(`${path.src}/js/**/*.js`)
        .pipe(plumber({ errorHandler: errorPlumber }))
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(dest(`${path.public}/js/`))
}

/**
 * 画像を圧縮する
 * 対象はjpg, png
 */
function imagemin() {
    const imagemin = require('gulp-imagemin');
    const pngquant = require('imagemin-pngquant');
    const mozjpeg = require('imagemin-mozjpeg');
    const changed = require('gulp-changed');

    return src(`${path.src}/images/**/*.{png,jpg,jpeg}`)
        .pipe(changed(`${path.public}/images/`))
        .pipe(imagemin([
            pngquant({
                quality: '65-80',
                speed: 1,
                floyd: 0,
            }),
            mozjpeg({
                quality: 85,
                progressive: true,
            })
        ], {
            verbose: true,
        }))
        .pipe(imagemin()) // 余計なメタ情報を削除
        .pipe(dest(`${path.public}/images/`));
}

/**
 * ローカルにwebサーバを立ち上げる
 * localhost:8000でアクセスできるようになります。
 */
function webserver() {
    const webserver = require('gulp-webserver');
    
    return src(path.public)
        .pipe(webserver({
            directoryListing: {
                enable: true,
                path: path.public,
            }
        }));
}

/**
 * ファイルの修正を監視
 */
function watchTranspile() {
    watch(`${path.src}/pug/**/*.pug`, pug);
    watch(`${path.src}/scss/**/*.scss`, scss);
    watch(`${path.src}/ts/**/*.ts`, webpack);
}

// 単体起動するタスク
exports.pug = pug;
exports.scss = scss;
exports.webpack = webpack;
exports.jsBundle = jsBundle;
exports.imagemin = imagemin;
exports.webserver = webserver;

// 複数タスクの実行
exports.watch = watchTranspile;
exports.build = parallel(pug, scss, webpack);
exports.all = parallel(pug, scss, webpack, jsBundle, imagemin);
exports.default = series(webserver, watchTranspile);