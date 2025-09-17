import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';

const configs = [
  // ES Module build
  {
    input: 'src/index.ts',
    output: {
      dir: 'lib/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named'
    },
    plugins: [],
    external: ['fs', 'path', 'util']
  },
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      dir: 'lib/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named'
    },
    plugins: [],
    external: ['fs', 'path', 'util']
  },
  // TypeScript declarations
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/types/index.d.ts',
      format: 'esm'
    },
    plugins: [dts()]
  }
];

export default configs.map(config => {
  if (config.output.dir) {
    config.plugins = [
      typescript({
        tsconfig: './tsconfig.json',
        outDir: config.output.dir,
        rootDir: 'src',
        exclude: ['**/*.test.ts', '**/*.spec.ts', 'tests/**/*']
      }),
      terser()
    ];
  }
  return config;
});
