import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

import pkg from "./package.json";

const prod = process.env.NODE_ENV === "production";

export default {
  input: "src/index.js",
  output: [
    {
      name: "ReactVisibleFocus",
      file: pkg.browser,
      format: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  external: ["react", "react-dom"],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    prod && terser(),
    prod && filesize(),
    !prod && serve(),
    !prod && livereload()
  ]
};
