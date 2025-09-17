console.log('🚀 Building diamond-constants package...');
console.log('📦 Compiling TypeScript...');

const { execSync } = require('child_process');

try {
  execSync('tsc', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
  console.log('📁 Output directory: ./lib/');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}