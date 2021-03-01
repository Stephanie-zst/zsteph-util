const path = require('path')

module.exports = {
  verbose: true,
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/test/unit/specs/*.spec.js'],
  transformIgnorePatterns: ['/node_modules/'],
  coverageDirectory: '<rootDir>/test/unit/coverage', // 覆盖率报告的目录
  collectCoverageFrom: [
    // 测试报告想要覆盖那些文件，!避开这些文件
    // 'src/components/**/*.(js|vue)',
    'src/modules/*.(js|json)',
    '!src/test.js',
    '!src/index.js',
    '!**/node_modules/**',
  ],
}
