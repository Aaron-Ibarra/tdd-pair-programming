// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    myFunction,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
} from '../functions.js';

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

test('this test should multiply a number by 7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected, 28);
});

test('this test should multiply a number by 12 and then halve the result', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 24);
});

test('this test should take in three numbers, divide the first by the second, then multiply the result ny th third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, 10);
});

test('this test should take in three numbers and returned as an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, [8, 4, 5]);
});

test('this test should return the numbers as a string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.deepEqual(actual, expected, '845');
});

test('this test should take in 2 numbers to add them and put into a greeting message', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected, 'Hello! Your lucky number for the day is 12.');
});

test('this test should take an array and return the return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'apple');
});

test('this test returns the last item of the array regardless of length', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'plum');
});
