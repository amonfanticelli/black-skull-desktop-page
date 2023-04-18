const gulp = require("gulp");
const babel = require("gulp-babel");
const gulpif = require("gulp-if");
const clean = require("gulp-clean");
const sourcemaps = require("gulp-sourcemaps");

function cleanTask() {
  return gulp.src("dist", { allowEmpty: true }).pipe(clean());
}

function jsTask() {
  const isDev = true;

  return gulp
    .src("src/**/*.{js,jsx,ts,tsx}")
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(
      babel({
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      })
    )
    .pipe(gulpif(isDev, sourcemaps.write(".")))
    .pipe(gulp.dest("dist"));
}

exports.default = gulp.series(cleanTask, jsTask);
