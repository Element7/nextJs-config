module.exports = {
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
		'^.+\\.svg$': 'jest-svg-transformer',
	},
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
	modulePathIgnorePatterns: ['<rootDir>/cypress/'],
}
