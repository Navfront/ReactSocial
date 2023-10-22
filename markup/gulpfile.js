const gulpImgResponsive = require("./gulp-img-responsive.js");
const { src, dest, series, watch, parallel } = require("gulp");
const gulpConcat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const gulpIf = require("gulp-if");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const svgSprite = require("gulp-svg-sprite");
const svgMin = require("gulp-svgmin");
const gulpImage = require("gulp-image");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const fileinclude = require("gulp-file-include");
const typograf = require("gulp-typograf");
const webp = require("gulp-webp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const notify = require("gulp-notify");
const del = require("del");

const browserSync = require("browser-sync").create();

const SRC_FOLDER = "src";
const DIST_FOLDER = "dist";

const SrcPaths = {
  JS: [`${SRC_FOLDER}/js/components/*.js`, `!${SRC_FOLDER}/js/vendor/*.js`],
  JSVendors: `${SRC_FOLDER}/js/vendor/*.js`,
  STYLES: `${SRC_FOLDER}/scss/**/*.scss`,
  HTML: [`${SRC_FOLDER}/html/**/*.html`, `!${SRC_FOLDER}/html/_*.html`],
  HTML_ALL: [`${SRC_FOLDER}/html/**/*.html`],
  SVG_SPRITE: `${SRC_FOLDER}/img/sprite/*.svg`,
  FONTS: [`${SRC_FOLDER}/fonts/**/*.woff`, `${SRC_FOLDER}/fonts/**/*.woff2`],
  WEBP: [
    `${SRC_FOLDER}/img/**/*.jpg`,
    `${SRC_FOLDER}/img/**/*.jpeg`,
    `${SRC_FOLDER}/img/**/*.png`,
  ],
  IMAGES: [
    `${SRC_FOLDER}/img/**/*.jpg`,
    `${SRC_FOLDER}/img/**/*.jpeg`,
    `${SRC_FOLDER}/img/**/*.png`,
    `${SRC_FOLDER}/img/**/*.svg`,
    `!${SRC_FOLDER}/img/sprite/*.svg`,
  ],
  COPY: [
    `${SRC_FOLDER}/**/*.ico`,
    `${SRC_FOLDER}/**/*.webmanifest`,
    `${SRC_FOLDER}/**/*min.css`,
  ],
};

const DistPaths = {
  JS: `${DIST_FOLDER}/js`,
  STYLES: `${DIST_FOLDER}/css`,
  IMAGES: `${DIST_FOLDER}/img`,
  FONTS: `${DIST_FOLDER}/fonts/`,
  DIST: `${DIST_FOLDER}`,
};

const FileNames = {
  JS: "bundle.min.js",
  STYLE: "**/*.min.css",
  SVG_SPRITE: "sprite.svg",
};

const isProductionMode = process.env.NODE_ENV === "production";

const buildStyles = () => {
  return src(SrcPaths.STYLES)
    .pipe(gulpIf(!isProductionMode, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .on("error", notify.onError())
    .pipe(gulpIf(!isProductionMode, sourcemaps.write()))
    .pipe(
      rename((path) => {
        path.basename += ".min";
        path.extname = ".css";
      })
    )
    .pipe(dest(DistPaths.STYLES))
    .pipe(browserSync.stream());
};

const buildHtml = () => {
  return src(SrcPaths.HTML)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(
      typograf({
        locale: ["ru", "en-US"],
        safeTags: [["<\\?php", "\\?>"]],
        disableRule: [
          "ru/dash/main",
          "common/punctuation/quote",
          "ru/nbsp/abbr",
          "ru/other/phone-number",
        ],
      })
    )
    .pipe(
      gulpImgResponsive({
        hasWebp: true,
        maxMedias: [
          { imgPrefix: "-1024", resolution: 1200 },
          { imgPrefix: "-768", resolution: 1023 },
          { imgPrefix: "-320", resolution: 575 },
        ],
      })
    )
    .pipe(gulpIf(isProductionMode, htmlmin({ collapseWhitespace: true })))
    .on("error", notify.onError())
    .pipe(dest(DistPaths.DIST))
    .pipe(browserSync.stream());
};

const buildJS = () => {
  return src(SrcPaths.JS)
    .pipe(gulpIf(!isProductionMode, sourcemaps.init()))
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulpConcat(FileNames.JS))
    .pipe(uglify({ toplevel: true }))
    .on("error", notify.onError())
    .pipe(gulpIf(!isProductionMode, sourcemaps.write()))
    .pipe(dest(DistPaths.JS))
    .pipe(browserSync.stream());
};

const buildSvgSprite = () => {
  return src(SrcPaths.SVG_SPRITE)
    .pipe(gulpIf(isProductionMode, svgMin()))
    .pipe(
      svgSprite({
        dest: DistPaths.SVG_SPRITE,
        mode: {
          symbol: {
            sprite: `../${FileNames.SVG_SPRITE}`,
          },
        },
      })
    )
    .on("error", notify.onError())
    .pipe(dest(DistPaths.IMAGES))
    .pipe(browserSync.stream());
};

const createWebp = () => {
  return src(SrcPaths.WEBP)
    .pipe(webp({ quality: 90 }))
    .pipe(dest(DistPaths.IMAGES));
};

const optimizeImages = () => {
  return src(SrcPaths.IMAGES)
    .pipe(gulpImage())
    .on("error", notify.onError())
    .pipe(dest(DistPaths.IMAGES))
    .pipe(browserSync.stream());
};

const copyFonts = () => {
  return src(SrcPaths.FONTS)
    .pipe(dest(DistPaths.FONTS))
    .pipe(browserSync.stream());
};

const copyImages = () => {
  return src(SrcPaths.IMAGES)
    .pipe(dest(DistPaths.IMAGES))
    .pipe(browserSync.stream());
};

const copyJSVendors = () => {
  return src(SrcPaths.JSVendors)
    .pipe(dest(DistPaths.JS))
    .pipe(browserSync.stream());
};

const copyOtherFiles = () => {
  return src(SrcPaths.COPY)
    .pipe(dest(DistPaths.DIST))
    .pipe(browserSync.stream());
};

const cleanDist = () => {
  return del(["dist"]);
};

const watchFiles = () => {
  browserSync.init({ server: { baseDir: DistPaths.DIST } });
};

watch(SrcPaths.HTML_ALL, buildHtml);
watch(SrcPaths.STYLES, buildStyles);
watch(SrcPaths.JS, buildJS);
watch(SrcPaths.SVG_SPRITE, buildSvgSprite);
watch(SrcPaths.IMAGES, isProductionMode ? optimizeImages : copyImages);
watch(SrcPaths.COPY, copyOtherFiles);
watch(SrcPaths.JSVendors, copyJSVendors);

exports.buildHtml = buildHtml;
exports.buildStyles = buildStyles;
exports.buildJS = buildJS;
exports.buildSvgSprite = buildSvgSprite;
exports.copyFonts = copyFonts;
exports.optimizeImages = optimizeImages;
exports.copyOtherFiles = copyOtherFiles;
exports.createWebp = createWebp;

exports.build = series(
  cleanDist,
  parallel(
    copyFonts,
    buildStyles,
    buildJS,
    buildHtml,
    buildSvgSprite,
    isProductionMode ? optimizeImages : copyImages,
    createWebp,
    copyJSVendors,
    copyOtherFiles
  )
);

exports.default = series(
  cleanDist,
  parallel(
    copyFonts,
    buildStyles,
    buildJS,
    buildHtml,
    buildSvgSprite,
    isProductionMode ? optimizeImages : copyImages,
    createWebp,
    copyJSVendors,
    copyOtherFiles
  ),
  watchFiles
);
