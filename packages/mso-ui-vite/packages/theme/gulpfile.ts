import path from "path";
import chalk from "chalk";
import { dest, parallel, series, src } from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import consola from "consola";

const distFolder = path.resolve(__dirname, "dist");
const distBundle = path.resolve(__dirname, "../../mso-ui/theme");

function buildThemeChalk() {
  const sass = gulpSass(dartSass);
  return src(path.resolve(__dirname, "src/**.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        );
      })
    )
    .pipe(dest(distFolder));
}

export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle));
}

export const build = parallel(series(buildThemeChalk, copyThemeChalkBundle));
export default build;
