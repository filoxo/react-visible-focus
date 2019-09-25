import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",
  output: [
    {
      name: "reactVisibleFocus",
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
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    external()
  ]
};
