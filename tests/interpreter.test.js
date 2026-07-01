import { describe, it } from 'vitest';
import { compileIntoVerse } from '../src/utils/compileIntoVerse.js';
import { injectEnds } from '../src/utils/preprocess.js';
import { parse } from '../src/utils/parser.js';
import { VerseInterpreter } from '../src/utils/interpreter.js';

function run(source) {
	const ast = compileIntoVerse(source);
	return new VerseInterpreter().interpret(ast);
}

// skip analyzeProgram() so interpreter evaluation can be tested on constructs
// (e.g. printing logic/array values) that real Verse's semantic checks reject.
function runInterpreterOnly(source) {
	const ast = parse(injectEnds(source));
	return new VerseInterpreter().interpret(ast);
}

describe('VerseInterpreter output', () => {
	it.todo('prints hello world and evaluates a string-interpolated expression');
	it.todo('evaluates arithmetic, logic, and compound assignment expressions');
});
