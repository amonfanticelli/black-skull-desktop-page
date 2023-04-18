import gulp from "gulp";
import gulpif from "gulp-if";
import clean from "gulp-clean";
import sourcemaps from "gulp-sourcemaps";
import tinypng from "gulp-tinypng-compress";
import typescript from "gulp-typescript";

const tsProject = typescript.createProject("tsconfig.json");

function cleanTask(done) {
  return gulp.src("dist", { allowEmpty: true }).pipe(clean(done));
}

function tsTask(done) {
  const isDev = true;

  return gulp
    .src("src/**/*.{ts,tsx}")
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(tsProject())
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
  return gulp.series(cleanTask, tsTask, imageTask)(done);
}
