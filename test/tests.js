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
    renderDogLI,
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

    const expected2 = 'SODA!!!';

    const actual2 = addExclamationPoints('SODA');

    expect.equal(actual2, expected2, 'SODA!!!');

    const expected3 = 'goodbye!!!';

    const actual3 = addExclamationPoints('goodbye');

    expect.equal(actual3, expected3, 'goodbye!!!');
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

test('this test should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, 10);

    const expected2 = 8;

    const actual2 = divideThenMultiply(16, 4, 2);

    expect.equal(actual2, expected2, 8);

    const expected3 = 24;

    const actual3 = divideThenMultiply(40, 5, 3);

    expect.equal(actual3, expected3, 24);
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

    const expected2 = 'luigi';

    const actual2 = getSecondItem(['mario', 'luigi', 'peach', 'bowser']);

    expect.deepEqual(actual2, expected2, 'luigi');

    const expected3 = 'blue';

    const actual3 = getSecondItem(['red', 'blue', 'orange', 'green']);

    expect.deepEqual(actual3, expected3, 'blue');
});

test('this test returns the last item of the array no matter the size', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'plum');

    const expected2 = 'peach';

    const actual2 = getLastItem(['kiwi', 'apple', 'orange', 'plum', 'peach']);

    expect.deepEqual(actual2, expected2, 'peach');

    const expected3 = 'mango';

    const actual3 = getLastItem(['kiwi', 'apple', 'orange', 'plum', 'peach', 'banana', 'mango']);

    expect.deepEqual(actual3, expected3, 'mango');
});

test('this should take a pet object and return an <li> with the name of the pet', (expect) => {
    const expected = '<li>Benny</li>';

    const actual = renderDogLI({ name: 'Benny', age: 6 });

    expect.deepEqual(actual, expected, '<li>Benny</li>');

    const expected2 = '<li>Pharah</li>';

    const actual2 = renderDogLI({ name: 'Pharah', age: 4 });

    expect.deepEqual(actual2, expected2, '<li>Pharah</li>');

    const expected3 = '<li>Nandi</li>';

    const actual3 = renderDogLI({ name: 'Nandi', age: 3 });

    expect.deepEqual(actual3, expected3, '<li>Nandi</li>');
});
