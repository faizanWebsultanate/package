import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';



export default [
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
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        rootDir: 'src',
        exclude: ['**/*.test.ts', '**/*.spec.ts', 'tests/**/*']
      }),
      terser()
    ],
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
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        rootDir: 'src',
        exclude: ['**/*.test.ts', '**/*.spec.ts', 'tests/**/*']
      }),
      terser()
    ],
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