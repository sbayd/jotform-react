import babel from '@rollup/plugin-babel';

// the entry point for the library
const input = 'lib/index.js';

//
var MODE = [
  {
    fomart: 'cjs'
  },
  {
    fomart: 'esm'
  },
  {
    fomart: 'umd'
  }
];


var config = [];


MODE.forEach((m) => {
  var conf = {
    input: input,
    output: {
      name: 'react-jotform',
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: 'auto'
    },
    // this externelizes react to prevent rollup from compiling it
    external: ['react', /@babel\/runtime/],
    plugins: [
      // these are babel comfigurations
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      })
    ]
  };
  config.push(conf);
});

export default [
  ...config
];
