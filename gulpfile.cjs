const gulp = require("gulp");
const babel = require("gulp-babel");
const fs = require("fs");

function jsTask() {
  // create the dist directory if it doesn't exist
  if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
  }

  return gulp
    .src("src/**/*.{js,jsx,ts,tsx}")
    .pipe(
      babel({
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      })
    )
    .pipe(gulp.dest("dist"));
}

exports.default = jsTask;
