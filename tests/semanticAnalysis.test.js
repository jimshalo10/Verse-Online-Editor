import { describe, it } from 'vitest';
import { compileIntoVerse } from '../src/utils/compileIntoVerse.js';

function analyze(source) {
	return compileIntoVerse(source);
}

describe('semantic analysis - Print string-convertibility', () => {
	it.todo('rejects interpolating a logic value in a Print string');
	it.todo('rejects printing an array value');
});
