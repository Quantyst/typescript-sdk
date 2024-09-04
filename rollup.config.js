const ts = require('@rollup/plugin-typescript');
const replace = require('@rollup/plugin-replace');
const packageJson = require('./package.json');

const replacePlugin = replace({
  preventAssignment: true,
  values: {
    __SDK_VERSION__: packageJson.version,
  },
});

module.exports = [
  {
    input: 'src/exports/index.ts',
    plugins: [replacePlugin, ts({ compilerOptions: { target: 'ES2015' } })],
    output: [
      {
        file: './dist/index.mjs',
        format: 'es',
        exports: 'named',
      },
      {
        file: './dist/index.cjs',
        format: 'cjs',
        exports: 'named',
      },
    ],
  },
];
