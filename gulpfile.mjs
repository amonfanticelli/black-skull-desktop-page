import gulp from "gulp";
import babel from "gulp-babel";
import gulpif from "gulp-if";
import clean from "gulp-clean";
import sourcemaps from "gulp-sourcemaps";
import tinypng from "gulp-tinypng-compress";

function cleanTask(done) {
  return gulp.src("dist", { allowEmpty: true }).pipe(clean(done));
}

function jsTask(done) {
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
    .pipe(gulp.dest("dist"))
    .on("end", done);
}

function imageTask() {
  return gulp
    .src("src/assets/**/*.{png,jpg,jpeg}")
    .pipe(tinypng({ key: "PqFNhtWkYLY4lswD61rpl6jDcZz3Frkf" }))
    .pipe(gulp.dest("dist/images"));
}

export default function defaultTask(done) {
  return gulp.series(cleanTask, jsTask, imageTask)(done);
}
