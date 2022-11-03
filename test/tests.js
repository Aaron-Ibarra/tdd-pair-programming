// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should add three exclamation points to the argument', (expect) => {
    const expected = 'hello!!!';

    const actual = addExclamationPoints('hello');

    expect.equal(actual, expected, 'hello!!!');
});
